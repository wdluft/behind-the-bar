import { gql } from 'apollo-boost';

export const GET_DRINKS = gql`
  query Drinks {
    drinks {
      _id
      name
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
    }
  }
`;
