import React from 'react';
import Header from './components/Header';
import CardsList from './components/CardsList';
import CardSection from './components/CardSection';
import CardSwitcher from './components/CardSwitcher';

const App: React.FC = () => {
  return (
    <>
      <Header />
      // <CardsList />
      <CardSection />
      <CardSwitcher />
    </>
  );
};

export default App;

