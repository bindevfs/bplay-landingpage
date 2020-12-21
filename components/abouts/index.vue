<template>
  <section ref="about-us" id="about-us-area" class="about-wrapper">
    <introduction />
    <div class="relative">
      <maps />
      <banner />
    </div>
  </section>
</template>
<script>
import Maps from '~/components/abouts/maps'
import Banner from '~/components/abouts/banner'
import Introduction from '~/components/abouts/introduction'
export default {
  components: {
    Introduction,
    Banner,
    Maps,
  },
}
</script>
