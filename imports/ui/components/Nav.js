import React from 'react';
import { NavWrapper } from '../elements';

const Nav = () => {
  return (
    <NavWrapper>
      <div className='nav__logo'>
        <h4>The Bean Bar</h4>
        <img src='/logo.svg' alt='Logo' />
      </div>
      <ul>
        <li>Drinks</li>
        <li>About</li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
