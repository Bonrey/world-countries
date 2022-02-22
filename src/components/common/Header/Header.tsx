import React from 'react';
import { cn } from '@bem-react/classname';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Header.scss';

const blk = cn('Header');

interface IHeaderProps {
  onThemeChange: (checked: boolean) => void;
  isDarkMode: boolean;
}

const Header: React.FC<IHeaderProps> = ({ onThemeChange, isDarkMode }) => {
  return (
    <header className={blk({ dark: isDarkMode })}>
      <h1>Where in the world?</h1>
      <ThemeToggle onThemeChange={onThemeChange} isDarkMode={isDarkMode} />
    </header>
  );
};

export default Header;
