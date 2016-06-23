var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    'name': '',
    'email': ''
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/contacts",
});

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection
};
