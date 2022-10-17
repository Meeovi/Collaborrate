import app from './app'

/**
 * store authenticated user creds
 * @param {object} context - Nuxt context object
 *
 */
export default async ({ res, route, redirect, store }, authResponse) => {

    // get the response token
    const { accessToken } = authResponse

    try {

        // verify the response accessToken
        const verifyResponse = await app.passport.verifyJWT(accessToken)

        // ensure that the cookie is now present, this cookie will be overwritten
        // when the browser app loads (via feathers app.authenticate), however by
        // setting it here we can preseve it if we fire off any redirects before
        // the browser app has authenticated
        if (process.server) {

            res.setHeader('Set-Cookie', `${process.env.authTokenCookieName}=${accessToken}, Path=/`)

        }

        // set the user within vuex module user
        await store.dispatch('user/setUser', verifyResponse.userId, {
            root: true,
        })

        // store the auth token on the app
        store.commit('user/SET_ACCESS_TOKEN', accessToken, {
            root: true,
        })

    } catch (err) {

        // report the error
        Promise.reject(err)

    }

}