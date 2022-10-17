import app from '@/packages/authentication//app'

const state = {
  accessToken: '',
  _id: '',
  email: '',
}

const getters = {}

const mutations = {

  /**
   * store the users feathers accessToken
   * @param {string} token
   *
   */
  SET_ACCESS_TOKEN(state, token = '') {

    state.accessToken = token

  },

  /**
   * passed a feathers user payload, set the
   * corresponding vuex store params
   * @param {object} payload - feathers User object
   *
   */
  SET_USER(state, payload) {

    if (payload._id) state._id = payload._id
    if (payload.email) state.email = payload.email

  },

  /**
   * reset the user
   *
   */
  RESET_USER(state) {

    state.accessToken = ''
    state._id = ''
    state.email = ''

  },

}

/*
 * module actions
 * context.state: local state
 * context.getters: local getters
 * context.rootState: root state
 * context.commit: call mutation
 * context.dispatch: call action
 *
 */
const actions = {

  async setUser({
    commit
  }, userId) {

    try {

      // if valid get the users object
      const feathersUser = await app.service('users').get(userId)

      // set the user within vuex module user
      commit('SET_USER', feathersUser)

    } catch (error) {

      console.error(error)

    }

  },

  async unauthenticate({
    commit
  }, userId) {

    // set a blank user
    commit('RESET_USER')

  },

  async logout({
    commit,
    dispatch
  }, userId) {

    // remove the JWT token from feathers server
    try {

      // unauthenticate the local user
      await dispatch('unauthenticate')

      // send request to feathers backend to logout the user
      await app.logout()

    } catch (error) {

      console.log(error)

    }

  },

}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
