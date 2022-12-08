import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client"

export default function(context){
    return {
        client: ApolloClient({
            link: createHttpLink({
                uri: "http://localhost:4000/graphql"
            }),
            cache: new InMemoryCache()
        })
    }
}