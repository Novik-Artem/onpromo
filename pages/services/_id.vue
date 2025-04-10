<template>
  <div :class="$style.container">
    <div :class="$style.banner">
      <video
        src="/videos/main.mp4"
        autoplay
        muted
        loop
        :class="$style.video"
        v-if="service.video_file"
      ></video>
      <img v-else :src="service.banner" alt="" :class="$style.image" />
    </div>
    <div :class="$style.content">
      <div :class="$style.title">{{ service.name }}</div>
      <div :class="$style.desc">
        {{ service.description }}
      </div>
      <div :class="$style.gallery">
        <div
          v-for="item in service.images"
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
    await this.$store.dispatch('services/getService', this.$route.params.id)
  },
  computed: {
    service() {
      return this.$store.state.services.service
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
      @include custom(925) {
        padding: 10rem 0 0 0;
        font-size: 3.2rem;
        margin: 0 0 20rem 0;
      }
      @include custom(750) {
        max-width: 25rem;
        padding: 6rem 0 0 0;
        margin: 0 0 10rem 0;
      }
      @include custom(450) {
        font-size: 2.8rem;
      }
    }
    .desc {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2rem;
      margin: 0 0 3rem 0;
      @include custom(950) {
        font-size: 1.5rem;
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
