import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
  		httpLinkOptions: {
    		uri: 'http://localhost:5000/graphiql',
    		credentials: 'same-origin',
			headers: {
				'x-hasura-admin-secret': 'H6RyPGzrnqzzdfmAJk0ykWBOpe92o12MHN0bOLsMNuDP8qKuHrni5fV4dLv2WmPR',
				'content-type': 'application/json'
			  }
  		},
  		cache: new InMemoryCache(),
	    wsEndpoint: 'ws://localhost:5000/graphiql',
  	}
}