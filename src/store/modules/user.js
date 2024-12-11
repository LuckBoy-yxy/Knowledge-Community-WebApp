import router from '@/router'
import { v4 as uuidv4 } from 'uuid'

import {
  SET_SID,
  SET_USERINFO,
  LOGIN_OUT,
  SET_HIDE,
  SET_MESSAGE
} from '../mutationTypes'
import { getCaptcha, login } from '@/api/login'

export default {
  state: {
    sid: '',
    userInfo: {},
    isHide: false
  },
  mutations: {
    [SET_SID] (state, sid) {
      state.sid = sid
    },
    [SET_USERINFO] (state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    [LOGIN_OUT] (state) {
      state.userInfo = {}
      localStorage.setItem('userInfo', JSON.stringify({}))
      router.push('/login')
    },
    [SET_HIDE] (state, value) {
      state.isHide = value
    },
    [SET_MESSAGE] (state, value) {
      // state.num = value.message ? value.message : 0
      state.num = value
    }
  },
  getters: {
    userInfo: state => state.userInfo,
    isHide: state => state.isHide,
    sid: state => state.sid
  },
  actions: {
    message (ctx, msgObj) {
      ctx.commit('setMessage', msgObj)
    },
    async getCode ({ commit }) {
      let sid = ''
      if (localStorage.getItem('sid')) {
        sid = localStorage.getItem('sid')
      } else {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      }
      commit(SET_SID, sid)

      const result = await getCaptcha(sid)
      console.log(result)
      if (result.code === 200) {
        return result.data
      }
    },
    async login ({ commit, state }, data) {
      const result = await login({
        ...data,
        sid: state.sid
      })
      console.log(result)
      if (result.code === 200 && result.data && result.data.token) {
        result.data.username = data.username
        commit(SET_USERINFO, result.data)
      }

      return result
    }
  }
}
