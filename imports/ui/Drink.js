import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_DRINK } from '../api/queries';

const Drink = () => {
  const { drinkid } = useParams();
  const { data, loading, error } = useQuery(GET_DRINK, {
    variables: { id: drinkid },
  });

  if (loading) return <h1>Loading...</h1>;
  console.log(data.drink);

  return (
    <div>
      <h1>{data.drink.name}</h1>
      <ul>
        {data.drink.tags.map(tag => {
          console.log(tag.name);
          return <li key={tag._id}>{tag.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Drink;
