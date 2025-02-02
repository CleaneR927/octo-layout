import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { cardData } from '../cardData';
import '../styles/cardSwitcher.scss';

const CardSwitcher: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(1140);
  const [cardWidth, setCardWidth] = useState(360);

  const windowRef = useRef<HTMLDivElement>(null);

  const getCardWidth = () => {
    const windowWidth = windowRef.current?.offsetWidth || width;

    if (windowWidth >= 1148) {
      return 390;
    } else if (windowWidth >= 944) {
      return 485;
    } else if (windowWidth >= 738) {
      return 375;
    } else if (windowWidth >= 546) {
      return 288;
    } else {
      return 320;
    }
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (windowRef.current) {
        const _width = windowRef.current.offsetWidth;
        setWidth(_width);
        setCardWidth(getCardWidth());
      }
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < cardData.length - Math.floor(width / cardWidth)) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="card-switcher">
      <div className="window" ref={windowRef}>
        <div
          className="card-switcher__cards"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`
          }}
        >
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="card-switcher__buttons">
        <button
          className="card-switcher__button"
          onClick={moveLeft}
          disabled={currentIndex === 0}
        />
        <button
          className="card-switcher__button card-switcher__button--rotate"
          onClick={moveRight}
          disabled={
            currentIndex ===
            cardData.length -
              Math.floor(width / cardWidth) -
              (width <= 350 ? 1 : 0)
          }
        />
      </div>
    </div>
  );
};

export default CardSwitcher;
