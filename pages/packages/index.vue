<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">Пакеты</div>
      <div :class="$style.packages">
        <div :class="$style.package" v-for="item in packages" :key="item.title">
          <div :class="$style.title">{{ item.name }}</div>
          <div :class="$style.image">
            <img :src="item.preview_image" alt="" />
          </div>
          <div :class="$style.video" v-for="video in item.videos" :key="video">
            <video :src="video.video_file" autoplay muted loop></video>
          </div>
          <div :class="$style.smeta">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('packages/getPackages')
  },
  computed: {
    packages() {
      return this.$store.state.packages.packages
    },
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
  .content {
    .title {
      padding: 10rem 0 0 0;
      @include Title;
      margin: 0 0 10rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
      }
    }
    .package {
      margin: 0 0 5rem 0;
      &:last-child {
        margin: 0;
      }
      .title {
        padding: 0;
        margin: 0 0 1rem 0;
        font-size: 2.5rem;
        border-bottom: 0.125rem solid $white;
      }
      .image {
        max-width: 50rem;
        max-height: 50rem;
        margin: 0 auto;
        object-fit: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .video {
        max-width: 50rem;
        max-height: 50rem;
        margin: 0 auto;
        overflow: hidden;
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .smeta {
        max-width: 50rem;
        max-height: 50rem;
        margin: 0 auto;
        object-fit: cover;
        overflow-y: scroll;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
