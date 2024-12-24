<template>
  <div
    class="header"
    :style="{ zIndex: zIndex, 'background-color': bgc }"
  >
    <div
      v-if="hasBack"
      @click="goBack"
      class="header-left"
    >
      <slot name="h-left">
        <svg-icon icon="arrow-left"></svg-icon>
        <span
          v-if="backText"
          class="left-text"
        >{{ backText }}</span>
      </slot>
    </div>

    <div class="header-content">
      <slot name="h-content">
        <span>{{ title }}</span>
      </slot>
    </div>

    <div class="header-right">
      <slot name="h-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    backText: {
      type: String,
      default: '返回'
    },
    back: {
      type: Function
    },
    bgc: {
      type: String
    },
    hasBack: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    goBack () {
      if (this.back) {
        this.back()
        return
      }
      // this.$router.back()
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../../assets/styles/variables.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  .header-content {
    overflow: hidden;
    margin: 0 auto;
    max-width: 60%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    // color: $primary-color;
  }
  .header-left,
  .header-right {
    position: absolute;
    top: 0;
    padding: 0 10px;
  }
  .header-left {
    left: 0;
  }
  .header-right {
    right: 0;
  }
}
</style>
