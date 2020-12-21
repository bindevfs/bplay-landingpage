<template>
  <div class="dropdown-language">
    <div class="dropdown" @click="toggleDropdown">
      <img :src="require(`~/assets/icons/${flatSeleted.icon}.svg`)" />
      <span class="dropdown__text">{{ flatSeleted.name }}</span>
      <span class="dropdown__icon"></span>
    </div>
    <div :class="['menu', { show: is_toggle }]">
      <div
        v-for="flat in flats"
        :key="flat.id"
        class="menu__item"
        @click="selectedFlat(flat.id)"
      >
        <img :src="require(`~/assets/icons/${flat.icon}.svg`)" alt="" />
        <span class="dropdown__text">{{ flat.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      is_toggle: false,
      flats: [
        { id: 1, name: 'ENG', icon: 'eng' },
        { id: 2, name: 'VN', icon: 'vietnam' },
      ],
      selected: 1,
    }
  },
  computed: {
    flatSeleted() {
      return this.flats.find(({ id }) => id === this.selected)
    },
  },
  methods: {
    toggleDropdown() {
      this.is_toggle = !this.is_toggle
    },
    selectedFlat(id) {
      this.selected = id
      this.is_toggle = false
    },
  },
}
</script>
