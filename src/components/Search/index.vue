<template>
  <div class="search-wrap" ref="search">
    <slot name="h-left"></slot>

    <div class="search-block">
      <i class="mintui mintui-search"></i>
      <input
        type="text"
        class="in"
        :placeholder="placeholderText"
        v-model="searchText"
      >
      <span @click.stop="onClear">
        <SvgIcon
          v-show="searchText"
          icon="close"
          className="close"
        />
      </span>
    </div>

    <div
      class="searchText"
      v-show="searchText"
      @click.stop="onSearch"
    >搜索</div>

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
  mounted () {
    const el = this.$refs.search
    window.forbidScroll(el)
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
