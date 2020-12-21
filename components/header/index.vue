<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
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

export default {
  components: {
    ScrollButton,
  },
}
</script>
