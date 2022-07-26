<template>
  <div>
    <!-- <button @click="add">點我加1</button>
    <span>倉庫的數據{{count}}</span>
    <button>點我減1</button>-->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
// import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  // computed: {
  //   ...mapState(['count'])
  // },
  // methods: {
  //   add() {
  //     this.$store.dispatch('add')
  //   }
  // }
}
</script>


<style lang="less" scoped>
</style>
