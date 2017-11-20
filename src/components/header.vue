<template>
  <div class="header">
      <head>
        <h1 class="title">{{title}}</h1>
      </head>
      <div class="tabar">
          <div class="tabar-left">推荐</div>
          <div class="tabar-right">艺术动态</div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: '猿圈儿·News'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
head{height: 2.25rem;display: flex;justify-content:center}
.title{font-size: 0.75rem;line-height: 2.25rem;}

.tabar{height: 2rem;display: flex}
.tabar div{width: 50%;flex-direction: row;font-size: 0.7rem;line-height: 2rem;text-align: center }
.tabar-left{background:#000;color: #ffffff; }
.tabar-right{background:#ffffff;color: #000; }
</style>