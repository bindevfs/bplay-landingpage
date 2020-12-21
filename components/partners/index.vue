<template>
  <section id="partners-area" class="partners-wrapper">
    <div class="container">
      <div class="partners">
        <div class="partners__item">
          <introduction />
          <list />
        </div>
      </div>
    </div>
    <div class="partners-image">
      <picture>
        <source
          srcset="~@/assets/images/partners/background-partners-2x.png"
          media="(min-width: 900px)"
        />
        <img src="~@/assets/images/partners/background-partners.png" alt="" />
      </picture>
    </div>
  </section>
</template>
<script>
import List from '~/components/partners/list'
import Introduction from '~/components/partners/introduction'
export default {
  components: { List, Introduction },
}
</script>
