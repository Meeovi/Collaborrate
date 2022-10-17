const asana = require('asana');
const client = asana.Client.create().useAccessToken('my_access_token');

client.users.me().then(function(me) {
  console.log(me);
});