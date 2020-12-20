<template>
  <div class="partners-introduction">
    <share-introduction
      :introduction="introduction"
      class="introduction--align-left"
    />
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
        title: 'PARTNERS',
        subtitle: `As a BPlay client you will benefit from content from more
        than 20 top tier providers. Based on your casino’s concept and targeted
        markets, we will tailor the perfect portfolio of games to offer
        to your players.
         `,
      },
    }
  },
}
</script>
