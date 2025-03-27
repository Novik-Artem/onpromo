<template>
  <div :class="$style.container">
    <Video />
    <Projects />
    <Services />
    <Equipment />
  </div>
</template>

<script>
import Video from '~/components/main-page/Video.vue'
import Projects from '~/components/main-page/Projects.vue'
import Services from '~/components/main-page/Services.vue'
import Equipment from '~/components/main-page/Equipment.vue'
export default {
  components: {
    Video,
    Projects,
    Services,
    Equipment,
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
}
</style>
