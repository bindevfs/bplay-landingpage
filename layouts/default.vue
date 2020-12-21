<template>
  <div>
    <navbar-collapse />
    <Nuxt keep-alive />
  </div>
</template>
<script>
import NavbarCollapse from '~/components/navbar-collapse'

export default {
  components: {
    NavbarCollapse,
  },
}
</script>
