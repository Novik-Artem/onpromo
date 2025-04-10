<template>
  <div :class="$style.container">
    <div :class="$style.banner">
      <video
        src="/videos/main.mp4"
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
      height: 35rem;
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
      @include Title;
      padding: 10rem 0 0 0;
      margin: 0 0 18rem 0;
      @include custom(750) {
        padding: 7rem 0 0 0;
        font-size: 3.2rem;
        margin: 0 0 13rem 0;
      }
      @include custom(500) {
        max-width: 25rem;
        padding: 6rem 0 0 0;
        margin: 0 0 10rem 0;
      }
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
      margin: 0 0 3rem 0;
      @include custom(500) {
        font-size: 1.2rem;
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
        max-width: 40rem;
        max-height: 40rem;
        object-fit: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
