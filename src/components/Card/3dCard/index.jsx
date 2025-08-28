import React, { useEffect, useState } from 'react';
import './Card.css'; // CSS fayllarini bu yerda import qiling
import { skills } from '../../../data/skils';

function Card({ data }) {
    const [refs, setRefs] = useState([]);

    useEffect(() => {
        setRefs(data.map(_ => React.createRef()));
    }, [data.length]);

    const handleMouseMove = (ref, bounds, e) => {
        if (!bounds || !ref.current) return;

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 10,
            y: topY - bounds.height / 4
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        ref.current.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
              ${center.y / 700},
              ${-center.x / 200},
              0,
              ${Math.log(distance) * 2}deg
            )
        `;
    };

    return (
        <>
            {data.map((item, index) => (
                <div
                    className="card"
                    ref={refs[index]}
                    onMouseEnter={e => handleMouseMove(refs[index], refs[index].current.getBoundingClientRect(), e)}
                    onMouseLeave={() => {
                        if (refs[index].current) {
                            refs[index].current.style.transform = '';
                            refs[index].current.style.background = '';
                        }
                    }}
                >
                    <div className='grow'>
                        <div className="skills__card mb-2 generall__border" id="skills">
                            <div className="flex">
                                {item.image && <img className='md:w-[120px] w-[100%] h-[100%]' src={item.image} alt={`${item.text} logo`} />}
                            </div>
                            <p className="p-incard text-center rounded-3xl">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;
