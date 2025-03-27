import Services from '~/api/services'


export const state = () => ({
  services: [],
  service: {}
})

export const mutations = {
  setServices(state, value) {
    state.services = value
  },
  setService(state, value) {
    state.service = value
  }
}

export const actions = {
  async getServices({ commit }) {
    const value = await Services.get()
    commit('setServices', value)
  },
  async getService({ commit }, id) {
    const value = await Services.getOne(id)
    commit('setService', value)
  },
}
