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
<style lang="scss">
.navbar-collapse-wrapper {
  background: #15161e;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.5s linear;
  visibility: hidden;
  .navbar-collapse {
    padding: 1.125rem 1rem;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__close {
      outline: none;
    }
  }
  &.show {
    opacity: 1;
    visibility: visible;
    display: block;
  }
}
</style>
