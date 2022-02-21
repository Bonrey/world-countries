import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
