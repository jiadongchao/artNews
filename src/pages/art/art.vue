<template>
  <div class="art">
    <banner></banner>
    <div class="content">
      <ul class="news-list" >
        <li class="news-item" v-for="item in arts">
          <div class="new-pic">
            <a :href='item.detailLink'>
              <img :src='item.Link'>
            </a>
          </div>
          <div class="new-title">
            <a :href='item.hrefLink'>{{item.Title}}</a>
            <span class="news-time">{{item.pubtext}}</span>
            <a class="source" :href='item.columnlink'>{{item.columnname}}</a>
          </div>
        </li>
        <li class="news-item">
          <div class="new-pic">
            <a>
              <img src="http://auction1.img.artimg.net/Img/image?c=1&w=181&h=134&src=https%3A%2F%2Fimg5.artron.net%2Fauction_manager%2F201711%2Ff89904b0759fd025bb9abf37060fbf391511248975.jpg">
            </a>
          </div>
          <div class="new-title">
            <a href="http://m.news.artron.net/20171121/n969583.html">厦门的中式生活文化节 让世界再一次看见来自东方的潮流</a>
            <span class="news-time">30分钟前</span>
            <a class="source" href="javascript:;">媒体关注</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from '../../components/banner'
export default {
  name: '',
  components:{
    banner
  },
  data () {
    return {
      msg: '',
      artUrl:"http://www.easy-mock.com/mock/5a1445d8e1f487793d19bbb5/home/art",
      arts:[]
    }
  },
  mounted(){
    this.getArt()
  },
  methods:{
    getArt: function() {
        this.$http.get(this.artUrl)
          .then((response) => {
            this.arts = response.body.data
            console.log(this.arts)
          })
          .catch(function(response) {
            console.log(response)
          })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{overflow: hidden;margin-top: 0.5rem;}
.news-list{overflow: hidden;}
.news-item{padding:0.75rem;overflow: hidden;background-color: #fff;margin-bottom: 1px}
.new-pic{display: inline-block;float: left;  width: 4.5rem;height: 3.35rem;}
.news-item img{ max-width: 4.5rem; max-height: 3.35rem;}
.new-title{display: inline-block;position: relative;float:right;  height: 3.35rem;width: 9.35rem;}
.new-title a{font-size: 0.65rem;line-height: 0.9rem;vertical-align: top;}
.news-time{font-size: 0.55rem;color: #969696;position: absolute;left: 0;bottom: 0}
.source{display: inline-block;border-radius: 3px;background:#4d950d;color:#fff;font-size: 0.5rem;line-hite:0.9rem;padding:0 0.5rem;position: absolute;bottom:0;right: 0; }
</style>