var Backbone = require('backbone');
var template = require('../templates/contactform.hbs')
var handlebars = require('handlebars');
var $ = require('jquery');

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  template: template,
  events: {
    'submit': 'addContact'
  },
  render: function(){
    var renderedHtml = this.template()
    this.$el.html(renderedHtml);
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    
    this.collection.create({
      'name': $('#new-contact-name').val(),
      'email': $('#new-contact-email').val(),
      'phone': $('#new-contact-phone').val(),
      'twitter': $('#new-contact-twitter').val(),
      'linkedin': $('#new-contact-linkedin').val(),
      'info': $('#new-contact-info').val()
    });
    // $('#contact-email').val('');
    // $('#contact-twitter').val('');
  }
});
module.exports= {
  'ContactFormView': ContactFormView,
};
