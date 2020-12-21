<template>
  <div class="play-landing">
    <header-nav />
    <base-header />
    <base-about />
    <base-product />
    <base-partners />
    <base-client />
    <base-footer />
  </div>
</template>
<script>
import HeaderNav from '~/components/header-nav'
import BaseHeader from '~/components/header'
import BaseAbout from '~/components/abouts'
import BaseProduct from '~/components/products'
import BasePartners from '~/components/partners'
import BaseClient from '~/components/clients'
import BaseFooter from '~/components/footers'
export default {
  components: {
    HeaderNav,
    BaseHeader,
    BaseAbout,
    BasePartners,
    BaseClient,
    BaseFooter,
    BaseProduct,
  },
}
</script>
<style lang="scss">
.play-landing {
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1920px) {
    max-width: 120rem;
  }
}
</style>
