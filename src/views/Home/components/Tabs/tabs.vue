<template>
  <div>
    <ul class="tab" ref="tab">
      <RouterLink
        class="item"
        v-for="(tab, index) in tabs"
        :key="'tab-' + index"
        :to="tab.path"
        exact-active-class="active"
      >
        <span class="text">{{ tab.name }}</span>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: [
        { name: '首页', path: '/index' },
        { name: '提问', path: '/index/ask' },
        { name: '建议', path: '/index/advise' },
        { name: '分享', path: '/index/share' },
        { name: '讨论', path: '/index/discuss' }
      ]
    }
  },
  mounted () {
    const el = this.$refs.tab
    window.forbidScroll(el)
  }
}
</script>

<style lang="scss" scoped>
@import './tabs.scss';
</style>
