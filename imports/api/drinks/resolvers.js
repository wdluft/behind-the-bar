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
      console.log(drink.name);
      console.log(drink.tags[0].name);
      // Get list of current tags
      const currentTagsList = Tags.find({}).fetch();

      let drinkTags = [];
      // for each tag in new drink
      drink.tags.forEach(tag => {
        console.log(`current tag: ${tag.name}`);
        // check if tag already exists
        const exists = currentTagsList.find(
          currentTag => currentTag.name === tag.name
        );
        // if exists, add tag id to array
        if (exists) {
          drinkTags.push(exists);
        }
        // if tag doesn't exist, create new tag
        const tagId = Tags.insert({
          name: tag.name,
        });
        drinkTags.push(Tags.findOne(tagId));
      });

      const drinkId = Drinks.insert({
        name: drink.name,
        tags: drinkTags,
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
