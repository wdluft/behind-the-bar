import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_DRINK } from '../api/mutations';
import { useHistory } from 'react-router-dom';
import { Form, Field } from '@leveluptuts/fresh';

const DrinkForm = () => {
  const [drinkName, setDrinkName] = useState('');
  const [createDrink] = useMutation(CREATE_DRINK, {
    refetchQueries: ['Drinks'],
  });
  const history = useHistory();

  const submitForm = e => {
    console.log(e.recipe);
    const tagObjs = e.tags.map(tag => {
      return { name: tag };
    });
    const drink = {
      name: e.drinkName,
      tags: tagObjs,
      recipe: e.recipe,
    };
    createDrink({ variables: { drink } });
    history.push('/');
  };

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Field required>Drink Name</Field>
        <Field type='tags'>Tags</Field>
        <Field required type='markdown'>
          Recipe
        </Field>
      </Form>
    </div>
  );
};

export default DrinkForm;
