<template>
  <div class="header">
      <head>
        <h1 class="title">{{title}}</h1>
      </head>
      <div class="tabar">
          <div v-bind:class="{ actived: recActive }" @click="$store.commit('NewsShow')">推荐</div>
          <div v-bind:class="{ actived: !recActive }" @click="$store.commit('NewsHide')">艺术动态</div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: '虞乐圈儿·News',

    }
  },
  computed:{ 
    recActive:function(){
      return this.$store.state.recActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{ position: relative;z-index: 11;}
head{height: 2.25rem;display: flex;justify-content:center;    position: fixed;top: 0;width: 16rem;z-index: 10;background: #f5f5f5;}
.title{font-size: 0.75rem;line-height: 2.25rem;}

.tabar{height: 2rem;display: flex}
.tabar div{width: 50%;flex-direction: row;background:#ffffff;color: #000; font-size: 0.7rem;line-height: 2rem;text-align: center }
.actived{background:#000 !important;color: #ffffff !important; }

</style>