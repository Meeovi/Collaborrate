import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import axios from 'axios'
import { CookieStorage } from 'cookie-storage'

const app = feathers()

// configure the features app
if (process.server) {
  
    // server config uses REST API
    // this allows us to use services on the server
    // by passing a Bearer token Auth header
    app
        .configure(rest(process.env.apiServer).axios(axios))
        .configure(auth())

} else {
    
    // client uses socketio for connection to feathers
    const socket = io(process.env.apiServer)

    app
        .configure(socketio(socket))
        .configure(auth({
            storage: new CookieStorage(),
        }))

}

// export the feathers app for other components
export default app