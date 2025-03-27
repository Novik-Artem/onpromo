import API from '~/services/apiClient'
import { Model } from './index'

class Equipment extends Model {
  async get() {
    const response = await API.get("/equipment/")
    return response.data
  }
  async getOne(id) {
    const response = await API.get(`/equipment/${id}/`)
    return response.data
  }
}
export default new Equipment('/equipment')
