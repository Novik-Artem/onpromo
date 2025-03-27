import API from '~/services/apiClient'
import { Model } from './index'

class Packages extends Model {
  async get() {
    const response = await API.get("/packages/")
    return response.data
  }
}
export default new Packages('/packages')
