import React from 'react';
import { DrinkCardWrapper } from '../elements';
import { Link } from 'react-router-dom';

const DrinkCard = ({ name, link, tags }) => {
  return (
    <DrinkCardWrapper>
      <img src='/spiced-daiquiri.jpg' alt='Drink Image' />
      <Link to={link}>
        <h3>{name}</h3>
      </Link>
      <ul>
        {tags.map(tag => (
          <li key={tag._id}>{tag.name}</li>
        ))}
      </ul>
    </DrinkCardWrapper>
  );
};

export default DrinkCard;
