import instance from '@/utils/request'

const getCaptcha = function (sid) {
  return instance.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
}

export {
  getCaptcha
}
