import React from 'react';
import MainPage from './MainPage/MainPage';
import CountryDetails from './CountryDetails/CountryDetails';

const Content: React.FC = () => {
  return (
    <div>
      {/* Route 1 */}
      <MainPage />
      {/* Route 2 */}
      <CountryDetails />
    </div>
  );
};

export default Content;
