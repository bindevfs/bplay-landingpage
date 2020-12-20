<template>
  <div class="software-list">
    <div class="software">
      <div
        v-for="software in softwares"
        :key="software.id"
        class="software__logo"
      >
        <img :src="requireImageLogo(software.logo)" :alt="software.name" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      softwares: [
        { id: 1, name: 'SB Tech', logo: 'sbtech.svg' },
        { id: 2, name: 'iovation', logo: 'iovation.svg' },
        { id: 3, name: 'seon', logo: 'seon.svg' },
        { id: 4, name: 'hogaming', logo: 'hogaming.svg' },
        { id: 5, name: 'vivogaming', logo: 'vivo.svg' },
      ],
    }
  },
  methods: {
    requireImageLogo(logoImage) {
      return logoImage ? require(`~/assets/images/partners/${logoImage}`) : ''
    },
  },
}
</script>
