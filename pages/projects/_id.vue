<template>
  <div :class="$style.container">
    <div :class="$style.banner">
      <div :class="$style.bg"></div>
      <video
        :src="project.video_file"
        autoplay
        muted
        loop
        playsinline
        :class="$style.video"
        loading="lazy"
        v-if="project.video_file"
      ></video>
      <img
        v-else
        :src="project.banner"
        alt=""
        :class="$style.image"
        loading="lazy"
      />
    </div>
    <div :class="$style.content">
      <div :class="$style.title">{{ project.name }}</div>
      <div :class="$style.desc" v-html="project.description"></div>
      <div :class="$style.gallery">
        <div
          v-for="item in project.images"
          :key="item.image"
          :class="$style.item"
        >
          <img :src="item.image" alt="" loading="lazy" />
        </div>
      </div>
      <div :class="$style.videos" v-if="project.videos">
        <div
          v-for="item in project.videos"
          :key="item.video_file"
          :class="$style.item"
        >
          <video
            :src="item.video_file"
            autoplay
            muted
            loop
            playsinline
            loading="lazy"
            :class="$style.video"
          ></video>
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
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $black;
      z-index: 3;
      opacity: 30%;
    }
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
      max-width: 45rem;
      position: absolute;
      top: 8.5rem;
      @include BigTitle;
      @include custom(750) {
        font-size: 3.2rem;
        top: 6rem;
      }
      @include custom(640) {
        font-size: 3rem;
      }
      @include custom(500) {
        max-width: 25rem;
        font-size: 2.3rem;
      }
    }
    .desc {
      padding-top: 31rem;
      line-height: 140%;
      margin: 0 0 3rem 0;
      @include custom(750) {
        padding-top: 22.8rem;
      }
    }

    .gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      margin: 0 0 3rem 0;
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
    .videos {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      .item {
        height: 30rem;
        @include custom(630) {
          height: 18rem;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
