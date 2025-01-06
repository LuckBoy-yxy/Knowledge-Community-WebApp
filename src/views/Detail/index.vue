<template>
  <div>
    <Header
      :title="pageData.title || '测试发帖'"
      :hasBack="true"
      :zIndex="1000"
    />

    <div class="wrapper">
      <div class="detail-head">{{ pageData.title }}</div>

      <div class="detail-info">
        <div class="detail-info-head">
          <div class="avatar">
            <img :src="pageData.user && pageData.user.pic" />
          </div>

          <div class="cont">
            <p class="name">{{ pageData.user && pageData.user.name }}</p>
            <p class="time">{{ pageData.created | moment }}</p>
          </div>
        </div>

        <div class="detail-info-body" v-richtext="pageData.content"></div>
        <div class="detail-info-foot">{{ pageData.reads }} 阅读</div>
      </div>
    </div>

    <div class="comments">
      <div class="title">评论</div>
      <ul
        class="comments-lists"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="30"
      >
        <li
          class="item"
          v-for="item in comments"
          :key="item._id"
        >
          <div class="detail-info-head">
            <div class="user">
              <div class="avatar">
                <img :src="item.cuid && item.cuid.pic" />
              </div>

              <div class="cont">
                <div class="name">{{ item.cuid && item.cuid.name }}</div>
                <div class="time">{{ item.created | moment }}</div>
              </div>
            </div>

            <div class="hands">
              <SvgIcon icon="zan" />
              <span>{{ item.hands }}</span>
            </div>
          </div>

          <div class="detail-body" v-richtext="item.content"></div>
        </li>
      </ul>
      <!-- <ul class="comments-lists">
        <li
          class="item"
          v-for="item in comments"
          :key="item._id"
        >
          <div class="detail-info-head">
            <div class="user">
              <div class="avatar">
                <img :src="item.cuid && item.cuid.pic" />
              </div>

              <div class="cont">
                <div class="name">{{ item.cuid && item.cuid.name }}</div>
                <div class="time">{{ item.created | moment }}</div>
              </div>
            </div>

            <div class="hands">
              <SvgIcon icon="zan" />
              <span>{{ item.hands }}</span>
            </div>
          </div>

          <div class="detail-body" v-richtext="item.content"></div>
        </li>
      </ul> -->

      <div
        class="info"
        v-if="comments.length === 0"
      >暂无评论，赶紧来抢沙发吧!!!</div>

      <div
        class="loading"
        v-if="loading"
      >
        <mt-spinner type="fading-circle"></mt-spinner>加载中...
      </div>
      <div
        class="info"
        v-if="isEnd && comments.length"
      >没有更多评论了, 亲</div>
    </div>

    <div class="detail-bottom" :class="{ fixed: isFocus }">
      <div class="bottom-input-wrap">
        <SvgIcon icon="advice" />
        <input
          type="text"
          class="input"
          placeholder="书写评论..."
          @focus="focus"
          @blur="blur"
        />
      </div>

      <ul class="bottom-right">
        <li :class="{'row': !showText}">
          <svg-icon icon="bianji"></svg-icon>
          <p>
            <span v-show="showText">评论</span>
            {{ pageData.answer }}
          </p>
        </li>
        <li :class="{'row': !showText}">
          <svg-icon icon="shoucang"></svg-icon>
          <p>
            <span v-show="showText">
              {{ pageData.isFav ? '取消收藏' : '收藏' }}
            </span>
          </p>
        </li>
        <li :class="{'row': !showText}">
          <svg-icon icon="zan"></svg-icon>
          <p>
            <span v-show="showText">赞</span>
            {{ pageData.fav }}
          </p>
        </li>
      </ul>
    </div>
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
      },
      showText: true,
      loading: false,
      isEnd: false,
      isFocus: false
    }
  },
  mounted () {
    this._getDetail()
    // this._getComments()
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
          if (res.data.length < this.pageSize) {
            this.isEnd = true
            if (res.data.length) {
              this.comments.push(...res.data)
            }
          } else {
            this.comments.push(...res.data)
            this.page++
          }
          this.loading = false
        }
      })
    },
    loadMore () {
      // this.page++
      if (this.isEnd) return
      this.loading = true
      this._getComments()
    },
    focus () {
      this.isFocus = true
    },
    blur () {
      this.isFocus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./detail.scss";

.comments {
  padding: 20px 30px $header-height 30px;
  background: #fff;
  .title {
    font-weight: bold;
    padding-bottom: 30px;
  }
  .item {
    padding: 10px 0 28px 0;
    color: $font-main-color;
  }
  .hands {
    font-size: 28px;
    padding-right: 12px;
    color: #999;
  }
  .svg-icon {
    font-size: px;
    margin-right: 10px;
  }
  .info {
    color: #999;
    font-size: 24px;
    text-align: center;
  }
  .detail-info-head {
    background-color: #fff;
    display: flex;
    align-items: center;
    font-size: 25px;
    padding-bottom: 20px;
    justify-content: space-between;
    .user {
      display: flex;
    }
    .avatar {
      margin-right: 20px;
      img {
        width: 72px;
        height: 72px;
        border-radius: 100%;
      }
    }
    .cont {
      flex: 1;
      .name {
        font-size: 26px;
        color: #333;
        margin-bottom: 10px;
      }
      .time {
        color: #999;
        font-size: 22px;
      }
    }
  }
}
.loading {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #999;
  padding: 20px 0 40px 0;
}
</style>
