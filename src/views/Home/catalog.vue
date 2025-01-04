<template>
  <div>
    <Scroll
      :distance="56"
      :isEnd="isEnd"
      @on-loadTop="refreshLists"
      @on-loadBottom="loadLists"
    >
      <ul>
        <li
          v-for="item in lists"
          :key="item._id"
        >{{ item }}</li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import { getList } from '@/api/content.js'

export default {
  name: 'Catalog',
  props: ['catalog'],
  data () {
    return {
      page: 1,
      pageSize: 10,
      isEnd: false,
      lists: []
    }
  },
  mounted () {
    this._getList()
  },
  methods: {
    refreshLists (end) {
      this.page = 1
      this._getList(end)
    },
    loadLists (end) {
      this.page++
      this._getList(end)
    },
    _getList (fn) {
      getList({
        page: this.page,
        pageSize: this.pageSize,
        catalog: this.catalog
      }).then(res => {
        if (res.code === 200) {
          console.log(res)
          this.lists = res.data
        }
        if (fn) fn()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
