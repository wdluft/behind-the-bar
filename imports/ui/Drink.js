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

  return (
    <div>
      <h1>{data.drink.name}</h1>
    </div>
  );
};

export default Drink;
