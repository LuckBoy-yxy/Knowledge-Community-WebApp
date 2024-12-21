import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const svgRequire = require.context('./svg', false, /\.svg$/)
// const requireAll = requireContext => requireContext.keys().forEach(requireContext)
// requireAll(svgRequire)
svgRequire.keys().forEach(svgPath => svgRequire(svgPath))
