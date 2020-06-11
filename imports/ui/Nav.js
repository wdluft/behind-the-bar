import React from 'react';
import { NavWrapper } from './elements';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavWrapper>
      <Link to='/'>
        <div className='nav__logo'>
          <img src='/logo.svg' alt='Logo' />
          <h4>The Bean Bar</h4>
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
