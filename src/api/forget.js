import instance from '@/utils/request'
import { getCaptcha } from './common'

const forget = async (submitData) => {
  return instance.post('/forget', submitData)
}

export {
  getCaptcha,
  forget
}
