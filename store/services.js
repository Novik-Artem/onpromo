import Services from '~/api/services'

export const state = () => ({
  services: [],
})

export const mutations = {
  setServices(state, value) {
    state.services = value
  },
}

export const actions = {
  async getServices({ commit }) {
    const value = await Services.get()
    commit('setServices', value)
  },
}
