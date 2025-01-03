<template>
  <div>
    <Layout>
      <Search />
      <Tabs />

      <RouterView />
    </Layout>
  </div>
</template>

<script>
import Tabs from './components/Tabs/tabs.vue'

export default {
  name: 'Home',
  components: {
    Tabs
  }
}
</script>

<style lang="scss" scoped>

</style>
