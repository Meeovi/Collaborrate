import { getClientID } from '@paypal/sdk-client/src';

fetch('https://api.paypal.com/v1/foo', {
  headers: {
    'client-id': getClientID()
  }
});