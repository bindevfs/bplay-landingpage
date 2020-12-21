<template>
  <div class="navbar-list">
    <ul class="navbar-nav">
      <li
        v-for="nav in navs"
        :key="nav.id"
        :class="[
          'navbar-nav__item',
          { 'navbar-nav__item--active': nav.key === is_selected },
        ]"
      >
        <a
          :href="`#${nav.id}`"
          class="navbar-nav__link"
          @click="clickNav(nav.key)"
        >
          {{ nav.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { key: 1, name: 'ABOUT US', id: 'about-us-area' },
        { key: 2, name: 'PRODUCTS', id: 'products-area' },
        { key: 3, name: 'PARTNERS', id: 'partners-area' },
        { key: 4, name: 'OUR CLIENTS', id: 'clients-area' },
        { key: 5, name: 'CONTACT US', id: 'contact-us-area' },
      ],
      is_selected: 1,
    }
  },
  methods: {
    clickNav(selected) {
      this.is_selected = selected
      this.$store.dispatch('toggleNavbar')
    },
  },
}
</script>
