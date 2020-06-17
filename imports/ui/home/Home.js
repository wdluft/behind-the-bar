import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link, useRouteMatch } from 'react-router-dom';
import { GET_DRINKS } from '../../api/queries';
import DrinkCard from './DrinkCard';
import Header from './Header';
import { DrinksGridWrapper } from '../elements';

const Home = () => {
  // const { data, loading, error } = useQuery(GET_DRINKS);
  // let match = useRouteMatch();
  // if (loading) return <h1>Loading...</h1>;

  // console.log(data.drinks);

  return (
    <div>
      <Header />
      <h2 id='drinkList'>Drinks</h2>
      {/* <DrinksGridWrapper>
        {data.drinks.map(drink => (
          <DrinkCard
            key={drink._id}
            name={drink.name}
            link={`${match.url}drinks/${drink._id}`}
            tags={drink.tags}
          />
        ))}
      </DrinksGridWrapper> */}
    </div>
  );
};

export default Home;
