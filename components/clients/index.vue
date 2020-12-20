<template>
  <div class="client-wrapper">
    <div class="container">
      <introduction />
      <list />
    </div>
  </div>
</template>
<script>
import Introduction from '~/components/clients/introduction'
import List from '~/components/clients/list'

export default {
  components: { List, Introduction },
}
</script>
