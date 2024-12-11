import axios from '@/utils/request'
import qs from 'qs'
// import store from '../store'

// const headers = {
//   Authorization: 'Bearer ' + store.state.userInfo.token,
//   'Content-Type': 'application/json'
// }

// 用户签到接口
export const userSign = () => {
  // return axios.get('/user/fav', {
  //   headers
  // })
  return axios.get('/user/fav')
}

// 更新用户的基本信息接口 (不修改用户名)
export const updateUserInfo = data => {
  return axios.post('/user/basic', data)
}

// 更新用户名的信息接口
export const updateUserName = data => {
  return axios.get('/public/reset-email?' + qs.stringify(data))
}

// 修改用户密码的接口
export const changePasswd = data => {
  return axios.post('/user/change-password', data)
}

// 收藏或取消收藏帖子接口
export const addCollect = params => {
  return axios.get('/user/set-collect?' + qs.stringify(params))
}

// 获取收藏列表数据
export const getCollectList = params => {
  return axios.get('/user/collect', qs.stringify(params))
}

// 获取个人中心中文章列表接口
export const getPostListByUid = params => {
  return axios.get('/user/post?' + qs.stringify(params))
}

// 删除个人中帖子接口
export const delPostByUid = params => {
  return axios.get('/user/del-post?' + qs.stringify(params))
}

// 获取个人中心收藏帖子接口
export const getCollect = params => {
  return axios.get('/user/collect?' + qs.stringify(params))
}

// 获取个人中心用户基本信息接口
export const getUserInfo = ({ uid }) => {
  return axios.get(`/public/base-user-info?uid=${uid}`)
}

// 在不登录的情况下, 获取其他发帖人个人中心中, 最近 20 条的发帖记录接口
export const getPublicPostByUid = params => {
  return axios.get('/public/latest-post?' + qs.stringify(params))
}

// 在不登录的情况下, 获取其他发帖人个人中心中, 最近 20 条评论记录接口
export const getCommentList = params => {
  return axios.get('/public/latest-comment?' + qs.stringify(params))
}

// 获取个人中心中, 我的消息页面的消息列表数据
export const getMsg = params => {
  return axios.get('/user/get-msg?' + qs.stringify(params))
}

// 删除某个或清空整个个人中心中, 我的消息页面的消息列表数据
export const setMsg = params => {
  return axios.get('/user/set-msg?' + qs.stringify(params))
}
