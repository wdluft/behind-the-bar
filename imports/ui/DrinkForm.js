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
    const tagObjs = e.tags.map(tag => {
      return { name: tag };
    });
    const drink = {
      name: e.drinkName,
      tags: tagObjs,
    };
    createDrink({ variables: { drink } });
    history.push('/');
  };

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Field>Drink Name</Field>
        <Field type='tags'>Tags</Field>
      </Form>
    </div>
  );
};

export default DrinkForm;
