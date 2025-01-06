<template>
  <div class="list-box" @click="showDetail(item._id)">
    <div class="list-head">
      <div class="title">
        <span
          class="type"
          :class="'type-' + item.catalog"
        >{{ item.catalog | catalogFilter }}</span>
        {{ item.title }}
      </div>

      <div class="author">
        <div class="inline-block" @click.stop="showUser(item.uid._id)">
          <img class="head" :src="item.uid.pic || '/img/bear-200-200.jpg'" />
          <div class="name">{{ item.uid.name || '未知用户' }}&nbsp;</div>
          <i class="vip" v-show="item.uid.isVip !== '0'">VIP {{ item.uid.isVip }}</i>
        </div>
      </div>
    </div>

    <div class="list-body">
      <div class="info" v-richtext="item.content"></div>
      <img class="fmt" v-show="item.snapshot" :src="item.snapshot" />
    </div>

    <div class="list-footer">
      <div class="left">
        <span class="reply-num">{{ item.answer || 0 }} 回复</span>
        <span class="timer">{{ item.created | moment }}</span>
      </div>
    </div>
  </div>
</template>

<script>
const CATALOG_TYPE = {
  share: '分享',
  discuss: '讨论',
  ask: '提问',
  advise: '建议'
}

export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    catalogFilter (val) {
      return CATALOG_TYPE[val]
    }
  },
  methods: {
    showDetail (id) {
      this.$emit('on-show-detail', id)
    },
    showUser (id) {
      this.$emit('on-show-user', id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./listItem.scss";
</style>
