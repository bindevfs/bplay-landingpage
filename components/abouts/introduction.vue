<template>
  <div class="introduction-wrapper">
    <div class="container">
      <share-introduction :introduction="introduction" />
    </div>
  </div>
</template>
<script>
import ShareIntroduction from '~/components/shared/introduction'
export default {
  components: {
    ShareIntroduction,
  },
  data() {
    return {
      introduction: {
        head: 'bplay game',
        title: 'who we are?',
        subtitle: `BPlay was founded in 2015 by a group of highly skilled professionals with
      over 15 years of experience in the iGaming industry. Today we are an
      international company with more than 100 employees and have operations in
      Malta, Ukraine, Romania, Norway, India, Myanmar and Taiwan...`,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.introduction-wrapper {
  padding: 80px 0 27px;
  @media (min-width: 1024px) {
    padding-left: 16rem;
    padding-right: 16rem;
  }
  @media (min-width: 1920px) {
    padding-left: 33rem;
    padding-right: 33rem;
  }
}
</style>
