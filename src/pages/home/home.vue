<template>
  <div class="home">
    <head-ele></head-ele>
    <recome-ele></recome-ele>
  </div>
</template>

<script>
import header from '../../components/header'
import recome from '../recome/recome'
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    "head-ele":header,
    "recome-ele":recome
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>