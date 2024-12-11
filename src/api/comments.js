import qs from 'qs'
import request from '@/utils/request'

import store from '@/store'

// 获取帖子评论数据接口
export const getComments = params => {
  let headers = {}
  const { token } = store.state.userInfo
  if (token) {
    headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }

  return request.get('/public/comments?' + qs.stringify(params), headers)
}

// 上传帖子评论接口
export const addComment = data => {
  return request.post('/comments/reply', data)
}

// 更新评论信息接口
export const updateComment = data => {
  return request.post('/comments/update', data)
}

// 采纳评论接口
export const setBestComment = params => {
  return request.get('/comments/accept?' + qs.stringify(params))
}

// 评论点赞接口
export const setHands = params => {
  return request.get('/comments/hands?' + qs.stringify(params))
}
