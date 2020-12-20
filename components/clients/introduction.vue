<template>
  <div class="client-introduction">
    <share-introduction :introduction="introduction" />
  </div>
</template>
<script>
import ShareIntroduction from '~/components/shared/introduction'
export default {
  components: { ShareIntroduction },
  data() {
    return {
      introduction: {
        head: 'bplay game',
        title: 'OUR CLIENTS',
      },
    }
  },
}
</script>
