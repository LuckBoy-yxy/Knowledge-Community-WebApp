<template>
  <div
    class="header"
    :style="{ zIndex: zIndex, 'background-color': bgc }"
  >
    <div
      class="header-left"
      @click="goBack"
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
  name: 'HeaderCom',
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

</style>
