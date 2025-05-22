<template>
  <div :class="$style.container">
    <Video />
    <Projects />
    <Equipment />
    <Services />
  </div>
</template>

<script>
import Video from '~/components/main-page/Video.vue'
import Projects from '~/components/main-page/Projects.vue'
import Equipment from '~/components/main-page/Equipment.vue'
import Services from '~/components/main-page/Services.vue'
export default {
  components: {
    Video,
    Projects,
    Equipment,
    Services,
  },
  mounted() {
    setTimeout(() => {
      window.location.hash = ''
    }, 500)
  },
  computed: {
    route() {
      return this.$route
    },
  },
  watch: {
    route() {
      setTimeout(() => {
        window.location.hash = ''
      }, 500)
      //this.$route.fullPath.split('#')[0]
    },
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
}
</style>
