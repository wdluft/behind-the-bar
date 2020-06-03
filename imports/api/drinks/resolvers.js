import Drinks from './drinks';

export default {
  Query: {
    drinks() {
      return Drinks.find({}).fetch();
    },
  },

  Mutation: {
    createDrink(obj, { name }, context) {
      console.log(name);
      const drinkId = Drinks.insert({
        name,
      });
      console.log(Drinks.findOne(drinkId));
      return Drinks.findOne(drinkId);
    },
  },
};
