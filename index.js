
var async = require('async');

function mailboxes(client, callback) {

  var folders = {};
  client.listMailboxes(function(err, items) {
    if (err) {
      return handleError(err);
    }
    async.each(items, handleItem, function() {
      callback(null, folders);
    });
  });

  function handleItem(item, done) {
    if (item.hasChildren) {
      item.listChildren(function(err, children) {
        if (err) {
          return handleError(err);
        }
        async.each(children, handleItem, done);
      });
    } else {
      if (!folders[item.type]) {
        folders[item.type] = item;
      }
      done(null);
    }
  }

  function handleError(err) {
    client.close();
    callback(err);
  }
}

module.exports = mailboxes;
