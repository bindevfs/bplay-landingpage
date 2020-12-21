<template>
  <div class="map-wrapper">
    <div class="about-map">
      <picture>
        <source
          class="about-map__img"
          srcset="~@/assets/images/maps-2x.png"
          media="(min-width: 376px)"
        />
        <img
          class="about-map__img"
          src="~@/assets/images/maps.png"
          alt="About Map"
        />
      </picture>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map-wrapper {
  @media (min-width: 376px) {
    transform: translateY(-20%);
  }
  .about-map {
    &__img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
