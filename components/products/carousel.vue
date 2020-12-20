<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
    <swiper-slide v-for="i in 9" :key="i">
      <product-item :product="product" />
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import ProductItem from '~/components/products/item'

export default {
  name: 'Carrousel',
  components: {
    ProductItem,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      product: {
        id: 1,
        image: 'live-casino.png',
        name: 'Live Casino',
        desc: 'Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino',
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  },
}
</script>
