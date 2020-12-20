<template>
  <div class="product-list">
    <product-item v-for="i in 9" :key="i" />
  </div>
</template>
<script>
import ProductItem from '~/components/products/item'
export default {
  components: { ProductItem },
}
</script>
