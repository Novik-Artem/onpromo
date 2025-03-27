import Projects from '~/api/projects'

export const state = () => ({
  projects: [],
  project: {}
})

export const mutations = {
  setProjects(state, value) {
    state.projects = value
  },
  setProject(state, value) {
    state.project = value
  },
}

export const actions = {
  async getProjects({ commit }) {
    const value = await Projects.get()
    commit('setProjects', value)
  },
  async getProject({ commit }, id) {
    const value = await Projects.getOne(id)
    commit('setProject', value)
  },
}
