<template>
  <div class="product-list">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import ProductItem from '~/components/products/item'
export default {
  components: { ProductItem },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
}
</script>
