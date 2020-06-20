import Drinks from './drinks';
import Tags from '../tags/tags';

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
    createDrink(obj, { drink }, context) {
      // Get list of current tags
      const currentTagsList = Tags.find({}).fetch();

      const drinkTags = [];
      // for each tag in new drink
      drink.tags.forEach(tag => {
        // check if tag already exists
        const exists = currentTagsList.find(
          currentTag => currentTag.name === tag.name
        );
        // if exists, add tag id to array
        if (exists) {
          drinkTags.push(exists);
        } else {
          // if tag doesn't exist, create new tag
          const tagId = Tags.insert({
            name: tag.name,
          });
          drinkTags.push(Tags.findOne(tagId));
        }
      });

      const drinkId = Drinks.insert({
        name: drink.name,
        tags: drinkTags,
        recipe: drink.recipe,
      });
      return Drinks.findOne(drinkId);
    },
    removeDrink(obj, { id }, context, info) {
      Drinks.remove({ _id: id });
      return Drinks.find({}).fetch();
    },
  },
};
