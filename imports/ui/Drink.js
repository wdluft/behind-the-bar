import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import { REMOVE_DRINK } from '../api/mutations';
import { GET_DRINK } from '../api/queries';
import Drinks from '../api/drinks/drinks';
import { usePageTitle } from './hooks';

const Drink = () => {
  const { drinkid } = useParams();
  const [removeDrink] = useMutation(REMOVE_DRINK, {
    refetchQueries: ['Drinks'],
  });
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_DRINK, {
    variables: { id: drinkid },
  });

  const removeDrinkButton = () => {
    removeDrink({ variables: { id: drinkid } });
    history.push('/');
  };

  const createRecipeMarkup = recipe => ({ __html: recipe });

  if (loading) return <h1>Loading...</h1>;
  console.log(data.drink.recipe);

  return (
    <div>
      <h2>{data.drink.name}</h2>
      <button type="button" onClick={removeDrinkButton}>
        Remove Drink
      </button>
      <p>Tags:</p>
      <ul>
        {data.drink.tags.map(tag => (
          <li key={tag._id}>{tag.name}</li>
        ))}
      </ul>
      <h3>Recipe</h3>
      <div dangerouslySetInnerHTML={createRecipeMarkup(data.drink.recipe)} />
    </div>
  );
};

export default Drink;
