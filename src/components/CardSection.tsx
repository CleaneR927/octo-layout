import React from 'react';
import '../styles/cardSection.scss';

const CardSection: React.FC = () => {
  return (
    <section className="card-section">
      <div className="card-section__container">
        <h2 className="card-section__title">Solutions for people like you</h2>
        <p className="card-section__text">
          How can we help your technology and services business develop a
          revenue engine based on Hubspot?
        </p>
        <div className="card-section__button-container">
          <button className="card-section__button">Call to action</button>
          <button className="card-section__button card-section__button--secondary">
            Call to action
          </button>
        </div>
      </div>
      <img
        className="card-section__image"
        alt="image alt"
        src="/src/assets/card-img.jpg"
      />
    </section>
  );
};

export default CardSection;
