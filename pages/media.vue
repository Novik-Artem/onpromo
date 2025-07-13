<template>
  <div :class="$style.content">
    <div :class="$style.media" v-for="item in media" :key="item.id">
      <div :class="$style.file" v-if="item.file_type === 'image'">
        <img :src="item.file_url" alt="" />
      </div>
      <div :class="$style.file" v-else-if="item.file_type === 'video'">
        <video :src="item.file_url" autoplay muted playsinline loop></video>
      </div>
      <div :class="$style.text">
        {{ item.category_title }} / {{ item.title }}
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
.content {
  @include container;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  @include custom(810) {
    grid-template-columns: 1fr;
  }

  .media {
    position: relative;
    cursor: pointer;
    .file {
      height: 30rem;
      width: 100%;
      @include custom(650) {
        height: 20rem;
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
</style>
