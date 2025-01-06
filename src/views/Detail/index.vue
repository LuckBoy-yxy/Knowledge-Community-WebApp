<template>
  <div>
    帖子详情页面
    {{ pageData }}
    {{ comments }}
  </div>
</template>

<script>
import { getDetail } from '@/api/content'
import { getComments } from '@/api/comments'

export default {
  name: 'Detail',
  props: ['tid'],
  data () {
    return {
      page: 1,
      pageSize: 10,
      total: 0,
      comments: [],
      pageData: {},
      editInfo: {
        content: '',
        code: '',
        sid: ''
      }
    }
  },
  mounted () {
    this._getDetail()
    this._getComments()
  },
  methods: {
    _getDetail () {
      getDetail(this.tid).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.pageData = res.data
        }
      })
    },
    _getComments () {
      getComments({
        page: this.page,
        pageSize: this.pageSize,
        tid: this.tid
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.comments = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
