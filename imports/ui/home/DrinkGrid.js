import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_DRINKS } from '../../api/queries';
import { DrinksGridWrapper } from '../elements';
import DrinkCard from './DrinkCard';
import Loading from '../Loading';

const DrinkGrid = () => {
  const { data, loading, error } = useQuery(GET_DRINKS);
  if (loading) return <Loading />;

  return (
    <DrinksGridWrapper>
      {data.drinks.map(drink => (
        <DrinkCard
          key={drink._id}
          name={drink.name}
          link={`/drinks/${drink._id}`}
          tagLink="/tags/"
          tags={drink.tags}
        />
      ))}
    </DrinksGridWrapper>
  );
};

export default DrinkGrid;
