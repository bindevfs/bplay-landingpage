<template>
  <div class="client-list">
    <div class="client">
      <div v-for="client in clients" :key="client.id" class="client__logo">
        <picture>
          <source
            :srcset="requireImageLogo(client.logo, '2x')"
            media="(min-width: 1920px)"
          />
          <img :src="requireImageLogo(client.logo)" :alt="client.name" />
        </picture>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clients: [
        { id: 1, name: 'galaxy', logo: 'galaxy.svg' },
        { id: 2, name: 'rich', logo: 'riche98.svg' },
        { id: 3, name: 'xpj', logo: 'xpj.svg' },
        { id: 4, name: 'bet365', logo: 'bet365.svg' },
        { id: 5, name: 'betfair', logo: 'betfair.svg' },
        { id: 6, name: 'betway', logo: 'betway.svg' },
        { id: 7, name: 'bwin', logo: 'bwin.svg' },
        { id: 8, name: 'williamhill', logo: 'williamhill.svg' },
        { id: 9, name: 'sanos', logo: 'sanos.svg' },
        { id: 10, name: 'renetian', logo: 'renetian.svg' },
        { id: 11, name: 'mouse', logo: 'mouse.svg' },
        { id: 12, name: 'all win city', logo: 'all-win-city.svg' },
      ],
    }
  },
  methods: {
    requireImageLogo(logoImage, size = '') {
      if (logoImage && size) {
        return require(`~/assets/images/clients/2x/${logoImage}`)
      }
      return logoImage ? require(`~/assets/images/clients/${logoImage}`) : ''
    },
  },
}
</script>
