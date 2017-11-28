import { Meteor } from 'meteor/meteor';
import './service-config.js'

Meteor.startup(() => {
});

Meteor.methods({
  verifyUser() {
    return Meteor.user();
  }
});
