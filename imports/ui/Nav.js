import React from 'react';
import { NavWrapper } from './elements';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavWrapper>
      <Link to='/'>
        <div className='nav__logo'>
          <h4>The Bean Bar</h4>
          <img src='/logo.svg' alt='Logo' />
        </div>
      </Link>
      <ul>
        <li>Drinks</li>
        <li>About</li>
        <Link to='/addDrink'>
          <li>Add Drink</li>
        </Link>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
