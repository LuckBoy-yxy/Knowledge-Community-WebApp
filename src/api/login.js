import { getCaptcha } from './common'
import request from '@/utils/request'

/**
 * 用户登录接口
 * @param {*} submitData 登录时后端所需的用户参数
 *
 */
const login = submitData => {
  return request.post('/login', submitData)
}

export {
  getCaptcha,
  login
}
