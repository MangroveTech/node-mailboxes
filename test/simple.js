
var test = require('tape');
var inbox = require('inbox');
var getMailboxes = require('../');

test('usage', function(t) {

  var client = inbox.createConnection(false, 'imap.gmail.com', {
    secureConnection: true,
    auth: {
      user: 'yorkiefixer@gmail.com',
      pass: 'your test password'
    }
  });

  getMailboxes(client, function() {
    console.log(arguments);
    t.end();
  });

  client.connect();
});