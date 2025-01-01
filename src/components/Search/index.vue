<template>
  <div class="search-wrap">
    <slot name="h-left"></slot>

    <div class="search-block">
      <i class="mintui mintui-search" @click.stop="onSearch"></i>
      <input
        type="text"
        class="in"
        :placeholder="placeholderText"
        v-model="searchText"
      >
      <span
        class="clearText"
        v-show="searchText"
        @click.stop="onClear"
      >清空</span>
    </div>

    <slot name="h-right"></slot>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    placeholderText: {
      type: String,
      default: '搜索社区内容'
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    onSearch () {
      this.$emit('on-search', this.searchText)
    },
    onClear () {
      this.searchText = ''
      setTimeout(() => {
        this.$emit('on-clear', '')
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './search.scss';
</style>
