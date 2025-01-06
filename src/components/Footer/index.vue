<template>
  <div>
    <ul class="layout-footer" ref="footer">
      <RouterLink
        v-for="(tab, index) in tabs"
        :key="'tab' + index"
        :to="tab.path"
        exact-active-class="active"
      >
        <SvgIcon :icon="tab.icon" class="svg-icon" :className="tab.icon" />
        <p>{{ tab.name }}</p>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      tabs: [
        { name: '首页', icon: 'name', path: '/index' },
        { name: '消息', icon: 'msg', path: '/msg' },
        { name: '热门', icon: 'type', path: '/category' },
        { name: '我的', icon: 'person', path: '/center' }
      ]
    }
  },
  mounted () {
    const el = this.$refs.footer
    window.forbidScroll(el)
  }
}
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>
