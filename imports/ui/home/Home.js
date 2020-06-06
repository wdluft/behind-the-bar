import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link, useRouteMatch } from 'react-router-dom';
import { GET_DRINKS } from '../../api/queries';

const Home = () => {
  const { data, loading, error } = useQuery(GET_DRINKS);
  let match = useRouteMatch();
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Drinks</h1>
      <ul>
        {data.drinks.map(drink => (
          <li key={drink._id}>
            <Link key={drink._id} to={`${match.url}drinks/${drink._id}`}>
              {drink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
