var $ = require('jquery');
//var views = require('./views/contactform');
var ContactCollection = require('./models/contacts').ContactCollection;
var ContactFormView = require('./views/contacter').ContactFormView;
var ContactListView = require('./views/contactlist').ContactListView;
//parse error on this page
var contacts = new ContactCollection();

var contactForm = new ContactFormView({collection: contacts});
$('.app').append(contactForm.render().el);

var contactList = new ContactListView({collection: contacts});
$('.app').append(contactList.render().el);

contacts.fetch();
