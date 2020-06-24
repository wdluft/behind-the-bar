import { gql } from 'apollo-boost';

export const GET_DRINKS = gql`
  query Drinks {
    drinks {
      _id
      name
      created
      tags {
        name
        _id
      }
    }
  }
`;

export const GET_DRINK = gql`
  query Drink($id: ID!) {
    drink(id: $id) {
      name
      tags {
        name
        _id
      }
      recipe
      created
    }
  }
`;

export const GET_DRINKS_BY_TAG = gql`
  query DrinksByTag($id: ID!) {
    drinksByTag(id: $id) {
      name
      _id
      created
      tags {
        name
        _id
      }
    }
  }
`;
