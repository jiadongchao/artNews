import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        NewsShow: true,
        recActive:true,
        artActive:false
    },
    mutations : {
        NewsShow(state){ 
            state.NewsShow = true
            state.recActive = true
            state.artActive = false
        },
        NewsHide(state){
            state.NewsShow = false
            state.recActive = false
            state.artActive = true
        }
    }
  })
  