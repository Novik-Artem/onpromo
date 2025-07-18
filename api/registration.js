import API from '~/services/apiClient'
import { Model } from './index'

class Registration extends Model {
  async registration(user) {
    const response = await API.post("/users/register/", {
      username: user.name,
      first_name: user.firstname,
      last_name: user.lastname,
      password: user.password,
      password2: user.password2

    })
    return response.data
  }

}
export default new Registration('/users/register')
