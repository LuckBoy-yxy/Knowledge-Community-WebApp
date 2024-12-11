import request from '@/utils/request'
import { getCaptcha } from './common'

const reg = (regInfo) => {
  return request.post('/reg', {
    ...regInfo
  })
}

export {
  getCaptcha,
  reg
}
