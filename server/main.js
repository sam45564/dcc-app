import { Meteor } from 'meteor/meteor';
import { UserCollection } from '/imports/api/users';

const insertUser = ({ name, count }) => UserCollection.insert({ name, count });

Meteor.startup(() => {
  if (UserCollection.find().count() === 0) {
    [
      { name: "A", count: 0 },
      { name: "B", count: 0 },
    ].forEach(insertUser);
  }
});

Meteor.publish('getUsers', function () {
  return UserCollection.find({});
});

Meteor.publish('saveCount', function ({ id, count }) {
  UserCollection.update(id, { $set: { count } });
});
