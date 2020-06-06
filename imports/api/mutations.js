import { gql } from 'apollo-boost';

export const CREATE_DRINK = gql`
  mutation CreateDrink($name: String!) {
    createDrink(name: $name) {
      _id
      name
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
