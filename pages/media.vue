<template>
  <div :class="$style.container">
    <div :class="$style.category" v-for="item in media" :key="item.title">
      <div :class="$style.title">{{ item.title }}</div>
      <div :class="$style.content">
        <div :class="$style.media" v-for="file in item.files" :key="file.id">
          <div :class="$style.file" v-if="file.file_type === 'image'">
            <a :href="file.file_url" target="__blank">
              <img :src="file.file_url" alt="" />
            </a>
          </div>
          <div :class="$style.file" v-else-if="file.file_type === 'video'">
            <a :href="file.file_url" target="__blank">
              <img src="/images/video.png" alt="" />
            </a>
          </div>
          <div :class="$style.file" v-else-if="file.file_type === 'other'">
            <a :href="file.file_url" target="__blank">
              <div :class="$style.flex">
                <img src="/images/file.png" alt="" />
              </div>
            </a>
          </div>
          <div :class="$style.text">
            {{ file.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Media from '~/api/media'
export default {
  async mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/auth')
    } else {
      const value = await Media.get()
      if (value.detail) {
        localStorage.removeItem('token')
      }
      this.media = value
    }
  },
  data() {
    return {
      media: [],
    }
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
  .title {
    margin: 4rem 0 4rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    @include custom(1050) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @include custom(680) {
      grid-template-columns: 1fr 1fr;
    }
    @include custom(480) {
      grid-template-columns: 1fr;
    }
    .media {
      position: relative;
      cursor: pointer;
      .file {
        .player {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 0.5rem;
          z-index: 3;
          .icon {
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 40px solid white;
          }
        }
        video,
        img {
          object-fit: cover;
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
        }
      }
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
    }
  }
}
</style>
