<template>
  <div>
    <Scroll
      :distance="footerHeight"
      :isEnd="isEnd"
      @on-loadTop="refreshLists"
      @on-loadBottom="loadLists"
    >
      <ul>
        <ListItem
          v-for="item in lists"
          :key="item._id"
          :item="item"
          @on-show-detail="goDetail"
          @on-show-user="goUser"
        />
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
      lists: [],
      isRepeat: false,
      handel: null,
      footerHeight: 0
    }
  },
  mounted () {
    this.footerHeight = document.getElementsByClassName('layout-footer')[0].offsetHeight
    this._getList()
  },
  methods: {
    init () {
      if (typeof this.handel === 'function') {
        this.handel()
      }
      this.page = 1
      this.isEnd = false
      this.isRepeat = false
      this.lists = []
      this._getList()
    },
    refreshLists (end) {
      this.handel = end
      this.init()
    },
    loadLists (end) {
      this.page++
      this.isEnd = false
      this.handel = end
      this._getList()
    },
    _getList () {
      if (this.isRepeat) return
      if (this.isEnd) return

      this.isRepeat = true
      getList({
        page: this.page,
        pageSize: this.pageSize,
        catalog: this.catalog,
        sort: 'created'
      }).then(res => {
        if (res.code === 200) {
          // console.log(res)
          if (res.data.length < this.pageSize) {
            this.isEnd = true
            if (res.data.length) {
              this.lists.push(...res.data)
            }
          } else {
            this.lists.push(...res.data)
          }
        }
        if (typeof this.handel === 'function') this.handel()
        this.isRepeat = false
      }).catch(err => {
        this.isRepeat = false
        if (err) {
          this.$Toast(err.message)
        }
      })
    },
    goDetail (tid) {
      console.log(tid)
      this.$router.push({
        name: 'detail',
        params: { tid }
      })
    },
    goUser (id) {
      console.log(id)
    }
  },
  watch: {
    catalog (newVal, oldVal) {
      this.catalog = newVal
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  background-color: #f3f6f8;
}
.add-post {
  position: fixed;
  bottom: 120px;
  right: 10px;
}
.info {
  color: #999;
  font-size: 24px;
  text-align: center;
  padding: 30px;
}
</style>
