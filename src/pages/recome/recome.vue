<template>
  <div class="recome">
     <!-- <headele></headele> -->
    <div class="content">
      <scroll :on-refresh="onRefresh" :on-infinite="onInfinite" >   
        <banner></banner>
        <ul class="news-list" >
          <li class="news-item" v-for="item in NewsData">
            <div class="new-pic">
              <a :href='item.columnlink'>
                <img :src='item.pic'>
              </a>
            </div>
            <div class="new-title">
              <a :href='item.link'>{{item.title}}</a>
              <span class="news-time">{{item.time}}</span>
              <a class="source" :href='item.columnlink'>{{item.columnname}}</a>
            </div>
          </li>
          <!-- <li class="news-item">
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
          </li> -->
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
import  headele from '../../components/header'
import banner from '../../components/banner'
import scroll from '../../components/scroll-y'
export default {
  name: '',
  components:{
   headele, banner,scroll
  },
  data () {
    return {
      msg: '',
      //NewsUrl:"http://www.easy-mock.com/mock/5a1445d8e1f487793d19bbb5/home/home",
      NewsUrl:'../../../static/News.json',
      artUrl:'../../../static/art.json',
      NewsData:[],
      newArts :{
        "id": "10015",
        "pic": "http:\/\/auction1.img.artimg.net\/Img\/image?c=1&w=181&h=134&src=https://img5.artron.net/auction_manager/201711/c2dd81a2133cf3daaea803a1cfe5759a1511237177.jpg",
        "title": "\u201c\u89c2\u4f17\u4e5f\u662f\u827a\u672f\u5bb6\u201d\u7cfb\u5217\u5c55\u5728\u91d1\u9675\u7f8e\u672f\u9986\u542f\u5e55",
        "columnname": "\u5c55\u89c8",
        "columnlink": "http:\/\/m.news.artron.net\/morenews\/list732",
        "link": "http:\/\/m.news.artron.net\/20171121\/n969493.html",
        "time": "2\u5c0f\u65f6\u524d"
      }
    }
  },
  mounted(){
    this.getNews(this.NewsUrl)
  },
  methods:{
    getNews: function(url) {
        this.$http.get(url)
          .then((response) => {
            this.NewsData = response.body.data
            console.log(this.NewsData)
          })
          .catch(function(response) {
            console.log(response)
          })
    },
    onRefresh(done) {
        
        this.NewsData.unshift(this.newArts)
        done() 
      
    },
     onInfinite(done) {
      //  console.log("aaa")
        this.NewsData.push(this.newArts)     
        setTimeout(()=>{     
          
          this.$el.querySelector('.load-more').style.display = 'none';
        },2000)
       done()
       
     }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recome{height: 100%}
.content{margin-top: 0.5rem;position:relative;height: 100%}
.news-list{overflow: hidden;}
.news-item{padding:0.75rem;overflow: hidden;background-color: #fff;margin-bottom: 1px}
.new-pic{display: inline-block;float: left;  width: 4.5rem;height: 3.35rem;}
.news-item img{ max-width: 4.5rem; max-height: 3.35rem;}
.new-title{display: inline-block;position: relative;float:right;  height: 3.35rem;width: 9.35rem;}
.new-title a{font-size: 0.65rem;line-height: 0.9rem;vertical-align: top;}
.news-time{font-size: 0.55rem;color: #969696;position: absolute;left: 0;bottom: 0}
.source{display: inline-block;border-radius: 3px;background:#4d950d;color:#fff;font-size: 0.5rem;line-hite:0.9rem;padding:0 0.5rem;position: absolute;bottom:0;right: 0; }
</style>