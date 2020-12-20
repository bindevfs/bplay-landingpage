<template>
  <div class="product-wrapper">
    <div class="container">
      <introduction />
      <list />
    </div>
    <div class="carousel-wrapper">
      <carousel />
    </div>
  </div>
</template>
<script>
import Introduction from '~/components/products/introduction'
import List from '~/components/products/list'
import Carousel from '~/components/products/carousel'

export default {
  components: { List, Introduction, Carousel },
}
</script>
