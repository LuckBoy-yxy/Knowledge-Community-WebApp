<template>
  <div>
    catalog page
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  props: ['catalog'],
  mounted () {
    console.log(this.catalog)
  }
}
</script>

<style lang="scss" scoped>

</style>
