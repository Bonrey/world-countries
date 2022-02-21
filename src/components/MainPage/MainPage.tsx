import React from 'react';
import SearchBar from './SearchBar';
import DropdownMenu from './DropdownMenu';
import CountriesList from './CountriesList';

const MainPage: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <DropdownMenu />
      <CountriesList />
    </div>
  );
};

export default MainPage;
