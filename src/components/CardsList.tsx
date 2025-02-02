import React from 'react';
import Card from './Card';
import { cardData } from '../cardData';
import '../styles/cardsList.scss';

const CardsList: React.FC = () => {
  return (
    <section className="cards-list">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          categoryColor={card.categoryColor}
          categoryName={card.categoryName}
          authorColor={card.authorColor}
          authorName={card.authorName}
          title={card.title}
          text={card.text}
          buttonColor={card.buttonColor}
          buttonText={card.buttonText}
        />
      ))}
    </section>
  );
};

export default CardsList;
