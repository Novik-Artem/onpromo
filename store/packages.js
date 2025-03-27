import Packages from '~/api/packages'

export const state = () => ({
  packages: [],
})

export const mutations = {
  setPackages(state, value) {
    state.packages = value
  },
}

export const actions = {
  async getPackages({ commit }) {
    const value = await Packages.get()
    commit('setPackages', value)
  },

}
