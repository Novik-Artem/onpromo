<template>
  <div :class="$style.container">
    <div :class="$style.banner">
      <video
        :src="project.video_file"
        autoplay
        muted
        loop
        :class="$style.video"
        v-if="project.video_file"
      ></video>
      <img v-else :src="project.banner" alt="" :class="$style.image" />
    </div>
    <div :class="$style.content">
      <div :class="$style.title">{{ project.name }}</div>
      <div :class="$style.desc">{{ project.description }}</div>
      <div :class="$style.gallery">
        <div
          v-for="item in project.images"
          :key="item.image"
          :class="$style.item"
        >
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
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
  .banner {
    .video,
    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 33.125rem;
      object-fit: cover;
      z-index: 2;
      @include custom(750) {
        height: 25rem;
      }
    }
  }
  .content {
    position: relative;
    z-index: 3;
    .title {
      @include BigTitle;
      padding-top: 8.5rem;
      @include custom(750) {
        font-size: 3.2rem;
      }
      @include custom(500) {
        max-width: 25rem;
        padding-top: 6rem;
      }
    }
    .desc {
      padding-top: 18rem;
      line-height: 140%;
      margin: 0 0 3rem 0;
      @include custom(750) {
        padding-top: 11rem;
      }
      @include custom(500) {
        padding-top: 13rem;
      }
    }

    .gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      @include custom(850) {
        grid-template-columns: 1fr 1fr;
      }
      @include custom(580) {
        grid-template-columns: 1fr;
      }
      .item {
        height: 12.5rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
