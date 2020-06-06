import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_DRINK } from '../api/mutations';
import { useHistory } from 'react-router-dom';

const DrinkForm = () => {
  const [drinkName, setDrinkName] = useState('');
  const [createDrink] = useMutation(CREATE_DRINK, {
    refetchQueries: ['Drinks'],
  });
  const history = useHistory();

  const submitForm = e => {
    e.preventDefault();
    createDrink({ variables: { name: drinkName } });
    console.log(drinkName);
    history.push('/');
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
