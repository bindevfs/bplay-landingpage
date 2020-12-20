<template>
  <div class="dropdown-language">
    <div class="dropdown" @click="toggleDropdown">
      <img src="~@/assets/images/eng.svg" alt="" />
      <span class="dropdown__text">ENG</span>
      <span class="dropdown__icon"></span>
    </div>
    <div :class="['menu', { show: is_toggle }]">
      <div class="menu__item">Option 1</div>
      <div class="menu__item">Option 2</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      is_toggle: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.is_toggle = !this.is_toggle
    },
  },
}
</script>
