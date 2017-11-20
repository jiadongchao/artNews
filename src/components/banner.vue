<template>
    <div class="banner">
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item">Slide 1</swiper-slide>
            <swiper-slide class="swiper-item">Slide 2</swiper-slide>
            <swiper-slide class="swiper-item">Slide 3</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'horizontal',
          autoplay:3000,
          speed:1000,
          loop:true,
          paginationClickable: true,
        }
      }
    }
  }
</script>

<style>
  .banner{
    position: relative;
    height: 100%;
  }
  .swiper-box {
    width: 100%;
    height: 9.5rem;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>