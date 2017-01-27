// Methods related to orders

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Orders } from './orders.js';

Meteor.methods({
  'orders.insert'(usrid, items) {
    return Orders.insert({
      id: Meteor.uuid(),
      usrid,
      items,
      createdAt: new Date()
    });
  },
  'orders.update'(orderId, items) {
    return Orders.update({
      id: orderId
    }, {$set: {items: items}});
  },
});
