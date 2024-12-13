import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const icons = require.context('./svg', false, /\.svg$/)
// console.log(icons)
// console.log(icons.keys())
const requireAll = requireContext => requireContext.keys().map(requireContext)

// console.log(requireAll(icons))
requireAll(icons)
