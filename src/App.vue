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
    const _this = this
    window.forbidScroll = forbidScroll
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize',
      function () {
        // if (window.orientation === 180 || window.orientation === 0) {
        //   alert('竖屏状态！')
        // }
        if (window.orientation === 90 || window.orientation === -90) {
          // alert('横屏状态！')
          _this.$Toast('请使用竖屏进行浏览！')
        }
      }, false)
  }
}
</script>

<style lang="scss">
@media (min-width: $break-super) and (orientation: landscape) {
  html::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
    background: #333;
  }
  body:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99999;
    margin: -140px 0 0 -50px;
    width: 100px;
    height: 200px;
    color: #fff;
    background-image: url('./assets/images/orientation.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 50%;
  }
  body:after {
    content: '\4e3a\4e86\66f4\597d\7684\4f53\9a8c\ff0c\8bf7\5c06\624b\673a\7ad6\8fc7\6765';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 99999;
    margin-top: 35px;
    width: 100%;
    height: 30px;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
}

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
