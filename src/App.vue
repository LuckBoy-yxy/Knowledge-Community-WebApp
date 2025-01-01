<template>
  <div id="app">
    <!-- <my-header title="imooc">
      <template #h-right>
        <span>test rigtht</span>
      </template>
    </my-header> -->

    <mt-header title="多个按钮">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button>关闭</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<style lang="scss">

</style>
