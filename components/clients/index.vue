<template>
  <section id="clients-area" class="client-wrapper">
    <div class="container">
      <introduction />
      <list />
    </div>
  </section>
</template>
<script>
import Introduction from '~/components/clients/introduction'
import List from '~/components/clients/list'

export default {
  components: { List, Introduction },
}
</script>
