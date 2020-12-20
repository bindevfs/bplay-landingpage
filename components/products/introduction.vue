<template>
  <div class="product-introduction">
    <share-introduction
      :introduction="introduction"
      class="introduction--left"
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
        title: 'OUR PRODUCTS',
        subtitle: `BPlay’s high quality iGaming Platform offers a complete
          solution for your casino. Get the full White Label turnkey solution
          or the Seamless API with our comprehensive selection of games.
          Through our global network of premium partners such as Vivo Gaming,
          SBTech and HoGaming you will have access to the best Live Casino,
          Sportsbook, Slots, Table Games, Number Games and Fishing Games
          on the market.
         `,
      },
    }
  },
}
</script>
