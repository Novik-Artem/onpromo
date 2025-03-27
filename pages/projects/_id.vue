<template>
  <div :class="$style.container">
    <div :class="$style.title">{{ project.name }}</div>
    <div :class="$style.image">
      <img :src="project.image" alt="" />
    </div>
    <div :class="$style.desc">{{ project.description }}</div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('projects/getProject', this.$route.params.id)
  },
  computed: {
    project() {
      return this.$store.state.projects.project
    },
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
  .title {
    @include Title;
    padding: 5rem 0;
    text-align: center;
  }
  .image {
    max-width: 50rem;
    max-height: 50rem;
    margin: 0 auto 3rem auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
  .desc {
    font-size: 1.5rem;
    line-height: 120%;
    @include custom(500) {
      font-size: 1.2rem;
    }
  }
}
</style>
