<template>
  <div class="product">
    <div class="product__item">
      <div class="product__image">
        <picture>
          <source
            class="about-map__img"
            srcset="~@/assets/images/products/live-casino-2x.png"
            media="(min-width: 1920px)"
          />
          <img src="~@/assets/images/products/live-casino.png" alt="" />
        </picture>
      </div>
      <div class="product__btn">
        <base-button>Live Casino</base-button>
      </div>
      <div class="product__desc">
        Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from '~/components/shared/buttons/base-button'
export default {
  components: { BaseButton },
}
</script>
<style lang="scss">
.product {
  grid-column: span 4;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__image {
    border-radius: 12px;
    max-height: 28rem;
  }
  &__btn {
    padding: 1rem 0;
  }
  &__desc {
    padding: 0 0.5rem;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    font-family: 'Mulish', sans-serif;
  }
}
@media (min-width: 1920px) {
  .product {
    &__btn {
      padding: 26px 0 20px;
    }
    &__desc {
      line-height: 28px;
      font-size: 1rem;
      padding: 0 3rem;
    }
  }
}
</style>
