<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import { forbidScroll } from '@/utils/forbidScroll'

export default {
  name: 'App',
  mounted () {
    window.forbidScroll = forbidScroll
  }
}
</script>

<style lang="scss">
.inline-block {
  display: inline-block;
}
.flex-row {
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
}
.mint-header {
  height: 50px;
}
img {
  vertical-align: middle;
}
pre {
  position: relative;
  margin: 0;
  padding: 0 15px;
  line-height: 36px;
  background: #f2f2f2;
  color: #333;
  font-family: 'Courier New', Courier, monospace, serif;
  font-size: 24px;
  border: none;
  border-left: 5px solid #ddd;
}
</style>
