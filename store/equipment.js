import Equipment from '~/api/equipment'

export const state = () => ({
  equipment: [],
  category: {},
  item: {}
})

export const mutations = {
  setEquipment(state, value) {
    const reverse = value.reverse()
    state.equipment = reverse
  },
  setItem(state, value) {
    state.item = value
  },
  setCategory(state, value) {
    state.category = value;
  }
}

export const actions = {
  async getEquipment({ commit }) {
    const value = await Equipment.get()
    commit('setEquipment', value)
  },
  async getItem({ commit }, id) {
    const value = await Equipment.getOne(id)
    commit('setItem', value)
  },
}
