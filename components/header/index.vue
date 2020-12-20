<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
        <div class="header">
          <div class="header__logo">
            <picture>
              <source
                class="about-map__img"
                srcset="~@/assets/images/logo-2x.svg"
                media="(min-width: 1920px)"
              />
              <img src="~@/assets/images/logo.svg" alt="Logo" />
            </picture>
          </div>
          <div class="header__item">
            <navbar class="responsive" />
            <dropdown-language />
            <toggle-navbar class="navbar-toggle" @click.native="openNavbar" />
          </div>
        </div>
        <div class="header-content">
          <h2 class="header-content__title">CASINO PLAYGAME</h2>
          <div class="header-button">
            <scroll-button reserve type="down"> Scroll </scroll-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import ScrollButton from '~/components/shared/buttons/scroll'
import ToggleNavbar from '~/components/shared/buttons/toggle-navbar'
import DropdownLanguage from '~/components/dropdown-language'
import Navbar from '~/components/navbar-collapse/navbar'
export default {
  components: {
    ScrollButton,
    ToggleNavbar,
    DropdownLanguage,
    Navbar,
  },
  methods: {
    openNavbar() {
      this.$store.dispatch('toggleNavbar')
    },
  },
}
</script>
