import React from 'react';
import { cn } from '@bem-react/classname';

const blk = cn('ThemeToggle');

const ThemeToggle: React.FC = () => {
  return (
    <div className={blk('ThemeToggle')}>
      <input id='theme-toggle' type='checkbox' />
      <label htmlFor='theme-toggle'>Dark Mode</label>
    </div>
  );
};

export default ThemeToggle;
