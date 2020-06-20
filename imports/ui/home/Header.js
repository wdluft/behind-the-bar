import React from 'react';
import { HeaderWrapper, HeaderContent } from '../elements';

const Header = () => (
  <HeaderWrapper>
    <HeaderContent className="container">
      <h3>Welcome to</h3>
      <h1 className="textPrimary">The Bean Bar</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        magni a sunt cumque cupiditate corporis fuga tempora voluptate expedita
        consequuntur!
      </p>
      <a href="#recentDrinks">See Recent Drinks</a>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
