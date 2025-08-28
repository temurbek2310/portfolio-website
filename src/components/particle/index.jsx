import React, { useEffect, useRef, useState } from 'react';
import imges from "../../Assets/me.JPG"; // O'zingizning rasm manzilingiz

const ParticleImage = ({ tagId = 'particle-image', params = {} , img = imges} ) => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const animationFrameId = useRef(null);
  const mouse = useRef({ x: null, y: null, isDown: false });

  const loadImage = (ctx, callback) => {
    const image = new Image();
    image.src = img; // Rasm manzili
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height);
      callback(ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
    };
  };

  const createParticlesFromImage = (imageData) => {  
    const particles = [];
    for (let y = 0; y < imageData.height; y += 10) {
      for (let x = 0; x < imageData.width; x += 10) {
        const index = (y * imageData.width + x) * 4; 
        const red = imageData.data[index];
        const green = imageData.data[index + 1];
        const blue = imageData.data[index + 2];
        const alpha = imageData.data[index + 3];
        if (alpha > 128) { // Partikul yaratish faqat shaffof bo'lmagan piksellarga
          const color = `rgba(${red},${green},${blue},${alpha})`;
          particles.push({
            x, y, color,
            vx: 0, vy: 0,
            baseX: x, baseY: y
          });
        }
      }
    }
    return particles;
  };

  const handleMouseMove = (event) => {
    mouse.current = {
      ...mouse.current,
      x: event.clientX,
      y: event.clientY
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    loadImage(ctx, (imageData) => {
      const initialParticles = createParticlesFromImage(imageData);
      setParticles(initialParticles);
      requestAnimationFrame(animate);
    });

    window.addEventListener('mousemove', handleMouseMove);

    // Kursorning ko'rinishini yashirish
    document.body.style.cursor = 'none';

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        let dx = mouse.current.x - p.x;
        let dy = mouse.current.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 50 && mouse.current.x !== null && mouse.current.y !== null) {
          p.vx = (p.vx - dx / 10);
          p.vy = (p.vy - dy / 10);
        } else {
          p.vx += (p.baseX - p.x) / 20;
          p.vy += (p.baseY - p.y) / 20;
          p.vx *= 0.95;
          p.vy *= 0.95;
        }
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
        ctx.fill();
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'default'; // Kursorning ko'rinishini qaytarish
    };
  }, []); // Dependency array bo'sh, komponent yuklanganda bajariladi

  return <canvas className='rel' ref={canvasRef} id={tagId} style={{ width: '100%', height: '100%' }} />;
};

export default ParticleImage;
