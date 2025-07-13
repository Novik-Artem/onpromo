import { setClient } from '~/services/apiClient'

export default ({ app }) => {
  app.$axios.onError((error) => {
    return error.response
  })

  app.$axios.onRequest((config) => {
    const newConfig = { ...config }
    if (localStorage.getItem("token")) {
      newConfig.headers.Authorization = `Token ${localStorage.getItem("token")}`
    }

    return newConfig
  })

  setClient(app.$axios)
}
