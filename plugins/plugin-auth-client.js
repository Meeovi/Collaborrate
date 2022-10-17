import app from '@/packages/authentication//app'
import authenticate from '@/packages/authentication//authenticate'

/**
 * auth client is run on the initial browser connection only
 * if a user is authenticated on the server, then the vuex user
 * state will contain their feathers JWT accessToken
 * however their connection to Feathers needs to re-authenticated
 * within the client browser so that socketio connections can
 * utilise it
 * @param {object} context - Nuxt context object
 *
 */

export default async function (context) {

    // grab the users JWT accessToken from the store if present
    const { accessToken } = context.store.state.user

    // if we have a token then authenticate the user
    if (accessToken) {

        try {

            // call feathers auth passing JWT token
            const authResponse = await app.authenticate({
                strategy: 'jwt',
                accessToken,
            })

            await authenticate(context, authResponse)

        } catch (error) {

            await context.store.dispatch('user/unauthenticate')

            console.error(error)

        }

    }

}