import React from 'react';
import { NavWrapper } from './elements';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavWrapper>
      <Link to='/' className='nav__logo'>
        <img className='nav__logoImg' src='/logo.svg' alt='Logo' />
        <h4 className='nav__logoTitle'>The Bean Bar</h4>
      </Link>
      <ul>
        <Link to='/'>
          <li>Drinks</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/addDrink'>
          <li>Add Drink</li>
        </Link>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
