import Tags from './tags';

export default {
  Query: {
    tags() {
      return Tags.find({}).fetch();
    },
  },

  Mutation: {
    createTag(obj, { name }, context) {
      console.log(name);
      const tagId = Tags.insert({
        name,
      });
      console.log(Tags.findOne(tagId));
      return Tags.findOne(tagId);
    },
  },
};
