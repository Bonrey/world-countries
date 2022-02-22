import React from 'react';
import { cn } from '@bem-react/classname';
import Header from './common/Header/Header';
import Content from './common/Content/Content';

import './App.scss';

const blk = cn('App');

const App = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <div className={blk({ dark: isDarkMode })}>
      <Header onThemeChange={toggleDarkMode} isDarkMode={isDarkMode} />
      <Content />
    </div>
  );
};

export default App;
