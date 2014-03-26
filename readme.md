node-mailboxes
======================

List primary better mailboxes, especially for GMail, and It's based on
[andris9/inbox](https://github.com/andris9/inbox)

### Installation

```bash
$ npm install mailboxes
```

### Usage

```js
var mailboxes = require('mailboxes');
var inbox = require('inbox');
var client = inbox.createConnection(false, 'imap.gmail.com', {
  secureConnection: true,
  auth: yourauthOption
});

mailboxes(client, function(err, mailboxes) {
  // Then you would get a well-format folders.
});
client.connect();
```

### Output format
```js
{ 
  Inbox: { 
    name: 'Inbox', 
    path: 'INBOX', 
    type: 'Inbox', 
    delimiter: '/' 
  },
  'All Mail': { 
    name: 'All Mail',
    path: '[Gmail]/All Mail',
    type: 'All Mail',
    delimiter: '/' 
  },
  Drafts: { 
    name: 'Drafts',
    path: '[Gmail]/Drafts',
    type: 'Drafts',
    delimiter: '/' 
  },
  Flagged: { 
    name: 'Important',
    path: '[Gmail]/Important',
    type: 'Flagged',
    delimiter: '/' 
  },
  Sent: { 
    name: 'Sent Mail',
    path: '[Gmail]/Sent Mail',
    type: 'Sent',
    delimiter: '/' },
  Junk: { 
    name: 'Spam',
    path: '[Gmail]/Spam',
    type: 'Junk',
    delimiter: '/' },
  Trash: { 
    name: 'Trash',
    path: '[Gmail]/Trash',
    type: 'Trash',
    delimiter: '/' 
  }
}
```


### License

MIT
