import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import DrinksForm from './DrinkForm';
import Nav from './components/Nav';

const App = () => {
  const { data, loading, error } = useQuery(hiQuery);
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Nav />
      <h1>{data.hi}</h1>
      <DrinksForm />
      <ul>
        {data.drinks.map(drink => (
          <li key={drink._id}>{drink.name}</li>
        ))}
      </ul>
    </div>
  );
};

const hiQuery = gql`
  query Drinks {
    hi
    drinks {
      _id
      name
    }
  }
`;

export default App;
