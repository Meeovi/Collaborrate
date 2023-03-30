import { InMemoryCache } from "apollo-cache-inmemory";
export default function client(){
  return {
  		httpLinkOptions: {
    		uri: 'http://localhost:4000/graphql',
    		credentials: 'same-origin',
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
  		},
  		cache: new InMemoryCache(),
	    wsEndpoint: 'ws://localhost:4000/graphql',
  	}
}