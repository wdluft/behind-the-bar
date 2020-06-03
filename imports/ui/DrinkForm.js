import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const CREATE_DRINK = gql`
  mutation CreateDrink($name: String!) {
    createDrink(name: $name) {
      _id
      name
    }
  }
`;

const DrinkForm = () => {
  const [drinkName, setDrinkName] = useState('');
  const [createDrink] = useMutation(CREATE_DRINK, {
    refetchQueries: ['Drinks'],
  });

  const submitForm = e => {
    e.preventDefault();
    createDrink({ variables: { name: drinkName } });
    console.log(drinkName);
  };

  return (
    <div>
      <input
        type='text'
        value={drinkName}
        onChange={e => setDrinkName(e.target.value)}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default DrinkForm;
