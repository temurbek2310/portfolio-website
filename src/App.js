import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Skils from './components/skils';
import NavBar from './components/NavBar';
import Cubanimation from './components/cubanimation';
import ThreeJsScene from './components/Prackricle-bg';
import Link from './components/Link';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [targetPos, setTargetPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [cursorStyle, setCursorStyle] = useState({});
  const [cursorVisibility, setCursorVisibility] = useState(false);
  const [isFollowingElement, setIsFollowingElement] = useState(false);

  useEffect(() => {
    const moveCursor = () => {
      const easeAmount = 0.3;
      const dx = (targetPos.x - cursorPos.x) * easeAmount;
      const dy = (targetPos.y - cursorPos.y) * easeAmount;
      setCursorPos(prev => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
    };
    const animationFrameId = requestAnimationFrame(moveCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos, targetPos]);

  const handleMouseMove = (e) => {
    if (!isFollowingElement) {
      setTargetPos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e?.target?.getAttribute) {
        const cursorStyleAttr = e.target.getAttribute('data-cursor-style');
        if (cursorStyleAttr) {
          const rect = e.target.getBoundingClientRect();
          const style = JSON.parse(cursorStyleAttr);
          setCursorStyle({
            ...style,
            left: rect.x -5,
            top: rect.y,
            width: `${rect.width + 10}px`,
            height: `${rect.height}px`,
            borderRadius: style.borderRadius || '0%',
            transform: 'translate(0,0)',
            transition: 'all .3s ease-in-out',
            borderColor: 'red',
            borderWidth: 2,
            borderRadius: 10
          });
          setCursorVisibility(true);
          setIsFollowingElement(true);
        }
      }
    };

    const handleMouseLeave = () => {
      setCursorStyle({
        width: '100px',
        height: '100px',
        borderRadius: '50%',
      });
      setCursorVisibility(false);
      setIsFollowingElement(false);
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);


  const handleMouseLeave = () => {
    setTargetPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setCursorVisibility(false);
    setIsFollowingElement(false);
  };

  return (
    <div
      className="app-container relative w-full h-max overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'crosshair' }} // Sistemaning kursorini yashirish
    >
      <NavBar />
      <main>
        <Home />
        <Link />
        <Skils />
        <Projects />
        <Contacts />
      </main>
      <div
        className={`cursor-blob ${!cursorVisibility && 'cursor-blob-anim'} md:block hidden`}
        style={{
          position: 'fixed',
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          // pointerEvents: 'none',
          // mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
          ...cursorStyle,
        }}
      />
      <Cubanimation />
      <ThreeJsScene />
    </div>
  );
}

export default App;
