var Backbone = require('backbone');
var formTemplate = require('../templates/contactform.hbs');
var template = require('../templates/newcontact.hbs');
var handlebars = require('handlebars');
var $ = require('jquery');

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.prepend(contactItem.render().el);
  }
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: template,
  render: function(){
    var context = this.model.toJSON();
    console.log(context);
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  'ContactListView': ContactListView,
  'ContactItemView': ContactItemView
}
