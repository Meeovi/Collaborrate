/* eslint-disable node/no-path-concat */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import ApiContracts from 'authorizenet';
import { getClientID } from '@paypal/sdk-client/src';
const {Client, Env, Currency, Models, Tokens} = require('bitpay-sdk');
const EPDQ = require('epdq');

// Authorize.Net

const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName('YOUR_API_LOGIN_ID');
	merchantAuthenticationType.setTransactionKey('YOUR_TRANSACTION_KEY');

// BitPay

const tokens = Tokens;
tokens.merchant = 'AdsBgKAHzQTE8geuC3jg4TPivcbLsiic69SAsZSoKSWk';
const keyFilePath = __dirname+'/../secure/private_key_test.key';
const keyPlainText = 'ce2030a2ed82ac2b0337e8ee00943428949e78cd606b8b1af9e08be6cdb442fd';
const configFilePath = __dirname+'/../secure/BitPay.config.json';

const client = new Client(
    null,
    Env.Test,
    [FULL_PATH_TO_THE_PRIVATE_KEY_|OR|_PRIVATE_KEY_AS-PLAIN_TEXT],
    tokens
);

// Barclaycard

EPDQ.config.shaType = "sha1";
EPDQ.config.pspid  = "MyPSPID";
EPDQ.config.shaIn  = "Mysecretsig1875!?";
EPDQ.config.shaOut = "yourshaoutstring";

// Paypal

fetch('https://api.paypal.com/v1/foo', {
  headers: {
    'client-id': getClientID()
  }
});