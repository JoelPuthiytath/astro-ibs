// CardScroller.jsx
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import CircularProgressBar from './CircularProgressBar';
import './CardScroller.css'; // Import the CSS file

const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

const CardScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        rotation: 360,
        duration: 1,
        ease: "none",
        repeat: -1,
      });

      gsap.to(cardRef.current, {
        x: 0,
        duration: 1,
        ease: "power2.inOut",
        onRepeat: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        },
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="card-scroller-container">
      <div className="progress-bar-container" ref={progressRef}>
        <CircularProgressBar progress={(currentIndex / cards.length) * 100} />
      </div>
      <div className="card-container" ref={cardRef}>
        <div className="card">
          {cards[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default CardScroller;
