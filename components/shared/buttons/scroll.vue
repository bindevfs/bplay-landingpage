<template>
  <button :class="['scroll-button', { 'scroll-button--reserve': reserve }]">
    <img :class="typeClass" src="~@/assets/icons/scroll-arrow.svg" alt="" />
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'top',
    },
    reserve: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClass() {
      return `scroll-button__${this.type}`
    },
  },
}
</script>
