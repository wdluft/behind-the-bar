import React from 'react';
import { usePageTitle } from '../hooks';
import Header from './Header';
import RecentDrinks from './RecentDrinks';

const Home = () => {
  usePageTitle('Home');

  return (
    <div>
      <Header />
      <RecentDrinks />
    </div>
  );
};

export default Home;
