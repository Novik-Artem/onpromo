import API from '~/services/apiClient'
import { Model } from './index'

class Media extends Model {
  async get() {
    const response = await API.get("/media-storage/categories/")
    return response.data
  }

}
export default new Media('/media-storage/categories')
