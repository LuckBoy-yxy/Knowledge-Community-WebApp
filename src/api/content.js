import qs from 'qs'
import request from '@/utils/request'
import store from '@/store'

/**
* @description: 获取文章列表
* @param {options} 请求列表所需的参数
*
*/
export const getList = options => {
  return request.get('/public/list?' + qs.stringify(options))
}

/**
* @description: 获取温馨通道或友情链接列表
* @param {type} links 为获取友情链接, tips 为获取温馨通道
*/
export const getTipsOrLinks = type => {
  return request.get('/public/tipsOrlinks', {
    params: {
      type
    }
  })
}

/**
* @description: 获取本周热议列表
*/
export const getTopWeek = () => {
  return request.get('/public/topWeek')
}

// 图片上传接口
export const uploadImg = formData => {
  return request.post('/content/upload', formData)
}

// 发表新帖接口
export const addPost = postData => {
  return request.post('/content/add', postData)
}

// 获取帖子详情数据接口
export const getDetail = tid => {
  let headers = {}
  const token = store.state.userInfo.token
  if (token) {
    headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
  return request.get('/public/content/detail?tid=' + tid, headers)
}

// 编辑帖子详情接口
export const updatePost = data => {
  return request.post('/content/update', data)
}
