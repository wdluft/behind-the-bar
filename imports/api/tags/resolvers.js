import Tags from './tags';
import Drinks from '../drinks/drinks';

export default {
  Query: {
    tags() {
      return Tags.find({}).fetch();
    },
    drinksByTag(obj, { id }, context, info) {
      // id is the tag id
      // get array of drinks
      const drinksList = Drinks.find({}).fetch();

      // for each drink, if array of tags includes id, add to array of drinks to return
      const drinksWithTag = [];
      drinksList.forEach(drink => {
        drink.tags.forEach(tag => {
          if (tag._id === id) {
            drinksWithTag.push(drink);
          }
        });
      });
      return drinksWithTag;
    },
  },

  Mutation: {
    createTag(obj, { name }, context) {
      console.log(name);
      const tagId = Tags.insert({
        name,
      });
      return Tags.findOne(tagId);
    },
    removeTag(obj, { id }, context, info) {
      Tags.remove({ _id: id });
      return Tags.find({}).fetch();
    },
  },
};
