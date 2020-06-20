import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { GET_DRINKS_BY_TAG } from '../api/queries';
import DrinkCard from './home/DrinkCard';

const DrinksByTag = () => {
  const { tagid } = useParams();
  const { data, loading, error } = useQuery(GET_DRINKS_BY_TAG, {
    variables: { id: tagid },
  });

  if (loading) return <Loading />;
  console.log(data);

  return (
    <div>
      <h1>Tagged Drinks</h1>
      <ul>
        {data.drinksByTag.map(drink => (
          <li key={drink._id}>
            <DrinkCard
              name={drink.name}
              link={`/drinks/${drink._id}`}
              tagLink="/tags/"
              tags={drink.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinksByTag;
