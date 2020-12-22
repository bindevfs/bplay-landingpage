<template>
  <div v-fixed class="header-nav">
    <div class="header">
      <nuxt-link to="/" class="header__logo">
        <picture>
          <source
            class="about-map__img"
            srcset="~@/assets/images/logo-2x.svg"
            media="(min-width: 1200px)"
          />
          <img src="~@/assets/images/logo.svg" alt="Logo" />
        </picture>
      </nuxt-link>
      <div class="header__item">
        <navbar class="responsive" />
      </div>
      <div class="header__item">
        <dropdown-language />
        <toggle-navbar class="navbar-toggle" @click.native="openNavbar" />
      </div>
    </div>
  </div>
</template>
<script>
import throttle from 'lodash.throttle'
import ToggleNavbar from '~/components/shared/buttons/toggle-navbar'
import DropdownLanguage from '~/components/dropdown-language'
import Navbar from '~/components/navbar-collapse/navbar'

export default {
  ToggleNavbar,
  DropdownLanguage,
  Navbar,
  directives: {
    fixed: {
      inserted(el) {
        window.addEventListener(
          'scroll',
          throttle(() => {
            const afterScrollTop =
              document.documentElement.scrollTop ||
              window.pageYOffset ||
              window.scrollY ||
              document.body.scrollTop
            console.log(afterScrollTop)
            afterScrollTop > 0
              ? el.classList.add('fixed')
              : el.classList.remove('fixed')
          }, 200)
        )
      },
      unbind() {
        window.onscroll = null
      },
    },
  },
  methods: {
    openNavbar() {
      this.$store.dispatch('toggleNavbar')
    },
  },
}
</script>
