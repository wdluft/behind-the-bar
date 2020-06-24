import React from 'react';
import { Link } from 'react-router-dom';
import { DrinkCardWrapper } from '../elements';

const DrinkCard = ({ name, link, tags, tagLink, created }) => {
  const createdDate = new Date(created);

  return (
    <DrinkCardWrapper>
      <img src="/spiced-daiquiri.jpg" alt="Drink" />
      <Link to={link}>
        <h5>{name}</h5>
      </Link>
      <ul>
        {tags.map(tag => (
          <li className="drinkCard__tag" key={tag._id}>
            <Link to={`${tagLink}${tag._id}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
      <p>Added on {createdDate.toString()}</p>
    </DrinkCardWrapper>
  );
};

export default DrinkCard;
