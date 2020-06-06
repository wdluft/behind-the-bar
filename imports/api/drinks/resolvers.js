import Drinks from './drinks';

export default {
  Query: {
    drinks() {
      return Drinks.find({}).fetch();
    },
    drink(obj, { id }, context, info) {
      return Drinks.findOne(id);
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
    removeDrink(obj, { id }, context, info) {
      Drinks.remove({ _id: id });
      return Drinks.find({}).fetch();
    },
  },
};
