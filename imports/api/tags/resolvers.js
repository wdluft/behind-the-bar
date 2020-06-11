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
      return Tags.findOne(tagId);
    },
    removeTag(obj, { id }, context, info) {
      Tags.remove({ _id: id });
      return Tags.find({}).fetch();
    },
  },
};
