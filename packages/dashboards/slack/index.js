var Slack = require('slack-node');

apiToken = "-- api token --";
 
slack = new Slack(apiToken);
 
slack.api("users.list", function(err, response) {
  console.log(response);
});
 
slack.api('chat.postMessage', {
  text:'hello from nodejs',
  channel:'#general'
}, function(err, response){
  console.log(response);
});

// Slack Webhooks
 
webhookUri = "__uri___";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 
slack.webhook({
  channel: "#general",
  username: "webhookbot",
  text: "This is posted to #general and comes from a bot named webhookbot."
}, function(err, response) {
  console.log(response);
});