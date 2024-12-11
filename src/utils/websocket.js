import Vue from 'vue'
import store from '@/store'

class WebSocketClient {
  constructor (config = {}) {
    const defaultConfig = {
      url: '127.0.0.1',
      port: 3012,
      protocol: 'ws',
      timeInterval: 30 * 1000
    }
    const finalConfig = {
      ...defaultConfig,
      ...config
    }
    this.ws = {}
    this.port = finalConfig.port
    this.url = finalConfig.url
    this.protocol = finalConfig.protocol
    this.timeID = null
    this.timeInterval = finalConfig.timeInterval
  }

  init () {
    this.ws = new WebSocket(`${this.protocol}://${this.url}:${this.port}`)
    this.ws.onopen = () => this.onOpen()
    this.ws.onmessage = (msg) => this.onMessage(msg)
    this.ws.onclose = () => this.onClose()
    this.ws.onerror = () => this.onError()
  }

  onOpen () {
    this.send(JSON.stringify({
      event: 'auth',
      message: `Bearer ${store.state.userInfo.token}`
    }))
  }

  onMessage (event) {
    const obj = JSON.parse(event.data)
    switch (obj.event) {
      case 'noauth':
        // this.$pop(obj.messgae)
        Vue.prototype.$pop(obj.messgae)
        store.commit('logout')
        // this.$router.push('/login')
        break
      case 'heartbeat':
        this.checkServer()
        this.ws.send(JSON.stringify({
          event: 'heartbeat',
          message: 'pong'
        }))
        break
      default:
        store.dispatch(obj.event, obj)
    }
  }

  onClose () {
    this.ws.close()
  }

  onError () {
    setTimeout(() => {
      this.init()
    }, 1000)
  }

  send (msg) {
    this.ws.send(msg)
  }

  checkServer () {
    if (this.timeID) {
      clearTimeout(this.timeID)
    }

    this.timeID = setTimeout(() => {
      this.onClose()
      this.onError()
    }, this.timeInterval + 1000)
  }
}

export default WebSocketClient
