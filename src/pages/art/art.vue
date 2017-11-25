<template>
  <div class="art">
   
    <!-- <banner></banner> -->
    <div class="content">
      <ul class="news-list" >
        <li class="news-item" v-for="(item,key) in arts">
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
        <infinite-loading @infinite="infiniteHandler">There is no more Hacker News</infinite-loading>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from '../../components/banner'
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: '',
  components:{
    banner,InfiniteLoading
  },
  data () {
    return {
      msg: '',
      //artUrl:"http://www.easy-mock.com/mock/5a1445d8e1f487793d19bbb5/home/art",
      artUrl:'../../../static/art.json',
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
    getNewArts: function() {
      this.$http.get(this.artUrl)
        .then((response) => {
          return response.body.data
          console.log("get new")
        })
        .catch(function(response) {
          console.log(response)
        })
    },
    infiniteHandler($state) {
      
        const newArts = {
          "NewsCode": "969810",
          "Title": "\u201c\u542b\u9053\u5e94\u7269\u2014\u2014\u4e2d\u56fd\u5c71\u6c34\u753b\u540d\u5bb6\u9080\u8bf7\u5c55\u201d\u4eca\u65e5\u5728\u300a",
          "PublishTime": "2017-11-22 20:53:08",
          "PageId": "732",
          "VideoPic": "",
          "SourceCode": "6696",
          "subtime": "\u4eca\u5929",
          "allTitle": "\u201c\u542b\u9053\u5e94\u7269\u2014\u2014\u4e2d\u56fd\u5c71\u6c34\u753b\u540d\u5bb6\u9080\u8bf7\u5c55\u201d\u4eca\u65e5\u5728\u300a\u827a\u672f\u5e02\u573a\u300b\u7f8e\u672f\u9986\u9686\u91cd\u5f00\u5e55",
          "pubtext": "48\u5206\u949f\u524d",
          "columnname": "\u5c55\u89c8",
          "Link": "http:\/\/auction1.img.artimg.net\/Img\/image?c=1&w=184&h=134&src=https%3A%2F%2Fimg4.artron.net%2Fauction_manager%2F201711%2F0c76964b0addf44187869bad7344ba821511355579.png",
          "hrefLink": "\/morenews\/list732",
          "detailLink": "\/20171122\/n969810.html"
        }
        setTimeout(() => {
        this.arts = this.arts.concat(newArts);

         $state.loaded();
        },1000)

    
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