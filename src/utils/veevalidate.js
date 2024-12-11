import { extend, localize } from 'vee-validate'
import { required, min, max, length, email, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

extend('required', required)
extend('min', min)
extend('max', max)
extend('length', length)
extend('confirmed', confirmed)
extend('email', email)
extend('code', {
  validate (value, arg) {
    return value.length === +arg.length
  },
  params: ['length'],
  message (field, arg) {
    return `${field === 'code' ? '验证码' : field}的长度为 ${arg.length} 位`
  }
})

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '{_field_}不能为空',
    email: '请输入有效的邮箱'
    // confirmed: '两次密码输入的不一致'
  },
  names: {
    email: '邮箱',
    username: '用户名',
    name: '昵称',
    oldpassword: '旧密码',
    password: '密码',
    repass: '确认密码',
    code: '验证码'
  },
  fields: {
    password: {
      confirmed: (field, { target }) => {
        return `两次${field}输入的不一致`
      }
    }
  }
})
