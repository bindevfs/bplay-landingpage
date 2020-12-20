<template>
  <div class="introduction">
    <div class="introduction__item">
      <h4 class="introduction__head">{{ introduction.head }}</h4>
      <h2 class="introduction__title">{{ introduction.title }}</h2>
    </div>
    <p v-if="introduction.subtitle" class="introduction__subtitle">
      {{ introduction.subtitle }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: {
      type: Object,
      default: () => {
        return {
          head: '',
          title: '',
          subtitle: '',
        }
      },
    },
  },
}
</script>
