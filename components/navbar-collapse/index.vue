<template>
  <div
    :class="[
      'navbar-collapse-wrapper',
      {
        show: isOpenNav,
      },
    ]"
  >
    <div class="navbar-collapse">
      <div class="navbar-collapse__header">
        <dropdown-language />
        <button class="navbar-collapse__close" @click="closeNavbar">
          <img src="~@/assets/icons/close.svg" alt="" />
        </button>
      </div>
    </div>
    <navbar />
  </div>
</template>
<script>
import Navbar from '~/components/navbar-collapse/navbar'
import DropdownLanguage from '~/components/dropdown-language'
export default {
  components: {
    Navbar,
    DropdownLanguage,
  },
  computed: {
    isOpenNav() {
      return this.$store.state.open_nav
    },
  },
  methods: {
    closeNavbar() {
      this.$store.dispatch('toggleNavbar')
    },
  },
}
</script>
