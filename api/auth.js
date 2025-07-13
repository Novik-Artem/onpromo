import API from '~/services/apiClient'
import { Model } from './index'

class Auth extends Model {
  async login(user) {
    const response = await API.post("/auth-token/", {
      username: user.name,
      password: user.password
    })
    return response.data
  }

}
export default new Auth('/auth-token')
