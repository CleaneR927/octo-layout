import React from 'react';
import '../styles/card.scss';
import { ICard } from '../types/Types';

const Card: React.FC<ICard> = ({
  image,
  categoryColor,
  categoryName,
  authorColor,
  authorName,
  title,
  text,
  buttonColor,
  buttonText
}) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={image} alt={`Card ${title}`} className="card__image" />
        <div
          className="card__image-category"
          style={{ backgroundColor: categoryColor }}
        >
          {categoryName}
        </div>
      </div>
      <div className="card__content">
        <div className="card__author" style={{ color: authorColor }}>
          {authorName}
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <button
          className="card__button"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
