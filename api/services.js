import API from '~/services/apiClient'
import { Model } from './index'

class Services extends Model {
  async get() {
    const response = await API.get("/services/")
    return response.data
  }
}
export default new Services('/services')
