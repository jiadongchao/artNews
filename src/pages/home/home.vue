<template>
  <div class="home">
    <head-ele></head-ele>
    <template v-if="$store.state.NewsShow">
      <recome-ele></recome-ele>
    </template>
    <template v-else>
      <art-ele></art-ele>
    </template>

  </div>
</template>

<script>
import header from '../../components/header'
import recome from '../recome/recome'
import art from '../art/art'
export default {
  name: '',
  data () {
    return {
      msg: '',
      NewsShow:false
    }
  },
  components:{
    "head-ele":header,
    "recome-ele":recome,
    "art-ele":art
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{padding-top: 2.2rem;}
</style>