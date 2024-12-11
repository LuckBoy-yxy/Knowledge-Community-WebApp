import WebSocketClient from '@/utils/websocket'

import { INIT_WEBSOCKET } from '../mutationTypes'

export default {
  state: () => {
    return {
      ws: null
    }
  },
  mutations: {
    [INIT_WEBSOCKET] (state, config) {
      state.ws = new WebSocketClient(config)
      state.ws.init()
    }
  }
}
