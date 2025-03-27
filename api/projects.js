import API from '~/services/apiClient'
import { Model } from './index'

class Projects extends Model {
  async get() {
    const response = await API.get("/projects/")
    return response.data
  }
  async getOne(id) {
    const response = await API.get(`/projects/${id}/`)
    return response.data
  }
}
export default new Projects('/projects')
