<template>
  <div :class="$style.container">
    <div :class="$style.banner">
      <div :class="$style.bg"></div>
      <video
        src="/videos/main.mp4"
        autoplay
        muted
        playsinline
        loop
        :class="$style.video"
      ></video>
    </div>
    <div :class="$style.content">
      <div :class="$style.title">Проекты</div>
      <div :class="$style.subtitle">Лучшие события по всему миру</div>
      <div :class="$style.grid">
        <div
          :class="$style.column"
          v-for="item in projects"
          :key="item.id"
          @click="open(item.id, item)"
        >
          <div :class="$style.image">
            <img :src="item.preview_image" alt="" />
          </div>
          <div :class="$style.text">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.projects
    },
  },
  methods: {
    open(id, item) {
      this.$store.commit('projects/setProject', item)
      this.$router.push(`/projects/${id}`)
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
    .video {
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
    .subtitle {
      max-width: 45rem;
      position: absolute;
      top: 15rem;
      line-height: 140%;
      margin: 0 0 3rem 0;
      font-size: 1.3rem;
      @include custom(750) {
        top: 12.5rem;
      }
      @include custom(640) {
        top: 10rem;
        font-size: 1rem;
      }
    }
    .grid {
      padding-top: 31rem;
      @include custom(750) {
        padding-top: 22.8rem;
      }
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.5rem;
      @include custom(1000) {
        grid-template-columns: 1fr 1fr;
      }
      @include custom(650) {
        grid-template-columns: 1fr;
      }
      .column {
        position: relative;
        cursor: pointer;
        .text {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          background-color: #000000d6;
          color: $white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image {
          height: 30rem;
          width: 100%;
          @include custom(1000) {
            height: 25rem;
          }
          @include custom(650) {
            height: 20rem;
          }
          img {
            object-fit: cover;
            border-radius: 0.5rem;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
