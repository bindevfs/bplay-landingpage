<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
    <template v-for="product in products">
      <swiper-slide :key="product.id">
        <product-item :product="product" />
      </swiper-slide>
    </template>
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
          clickable: true,
        },
        centeredSlides: false,
        preloadImages: true,
        slidesPerView: 'auto',
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false)
  },
}
</script>
