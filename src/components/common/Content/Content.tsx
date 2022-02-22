import React from 'react';
import { cn } from '@bem-react/classname';
import MainPage from '../../mainPage/MainPage';
import CountryDetails from '../../countryDetails/CountryDetails';

const blk = cn('Content');

import './Content.scss';

const Content: React.FC = () => {
  return (
    <main className={blk()}>
      {/* Route 1 */}
      <MainPage />
      {/* Route 2 */}
      <CountryDetails />
    </main>
  );
};

export default Content;
