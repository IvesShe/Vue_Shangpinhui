<template>
  <div>
    <h1>Search</h1>
    <h1>params參數---{{$route.params.keyword}}======{{a}}{{b}}</h1>
    <h1>query參數---{{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Search',
  // 路由組件可以傳遞props
  props: ['keyword', 'a', 'b', 'k']
}
</script>


<style lang="less" scoped>
</style>
