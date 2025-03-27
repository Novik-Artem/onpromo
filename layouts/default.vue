<template>
  <div :class="$style.layout">
    <Header :class="$style.header" />
    <div :class="$style.content">
      <Nuxt />
    </div>
    <Footer :class="$style.footer" />
  </div>
</template>

<script>
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },

  async mounted() {
    await this.$store.dispatch('projects/getProjects')
    await this.$store.dispatch('services/getServices')
    await this.$store.dispatch('equipment/getEquipment')
  },
}
</script>

<style lang="scss" module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $black;
  color: $white;
  .content {
    padding-top: 5rem;
    flex: 1 1 auto;
    width: 100%;
    max-width: 77rem;
    margin: 0 auto;
  }
  .header,
  .footer {
    width: 100%;
  }
}
</style>
