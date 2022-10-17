var dynamo = require('dynamodb');
dynamo.AWS.config.loadFromPath('credentials.json');

dynamo.AWS.config.update({accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: "REGION"});