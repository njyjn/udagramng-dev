import AWS = require('aws-sdk');

// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
