<template>
  <div v-if="product" class="product">
    <div class="product__item">
      <div class="product__image">
        <picture>
          <source
            class="about-map__img"
            :srcset="requireImageProductLarge"
            media="(min-width: 1920px)"
          />
          <img :src="requireImageProductLarge" alt="" />
        </picture>
      </div>
      <div class="product__btn">
        <base-button>{{ product.name }}</base-button>
      </div>
      <div class="product__desc">
        {{ product.desc }}
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from '~/components/shared/buttons/base-button'
export default {
  components: { BaseButton },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    requireImageProductLarge() {
      return this.product?.image
        ? require(`~/assets/images/products/2x/${this.product.image}`)
        : ''
    },
  },
}
</script>
