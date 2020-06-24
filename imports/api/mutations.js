import { gql } from 'apollo-boost';

export const CREATE_DRINK = gql`
  mutation CreateDrink($drink: DrinkInput!) {
    createDrink(drink: $drink) {
      name
      tags {
        name
      }
      recipe
      created
    }
  }
`;

export const REMOVE_DRINK = gql`
  mutation RemoveDrink($id: ID!) {
    removeDrink(id: $id) {
      _id
      name
    }
  }
`;
