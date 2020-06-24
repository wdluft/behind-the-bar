import React from 'react';
import { HeaderWrapper, HeaderContent } from '../elements';

const Header = () => (
  <HeaderWrapper>
    <HeaderContent className="container">
      <h3>Welcome to</h3>
      <h1 className="textPrimary">The Bean Bar</h1>

      <h5>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        magni a sunt cumque cupiditate corporis fuga tempora voluptate expedita
        consequuntur!
      </h5>
      <a href="#recentDrinks" className="button">
        See Recent Drinks
      </a>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
