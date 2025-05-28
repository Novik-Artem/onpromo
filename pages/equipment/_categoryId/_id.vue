<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.top">
        <div :class="$style.title">{{ equipment.name }}</div>
        <div :class="$style.img">
          <img :src="equipment.image" alt="" />
        </div>
      </div>
      <div :class="$style.bottom">
        <div>
          <div :class="$style.category">
            Категория: {{ equipment.category?.name }}
          </div>
          <div :class="$style.desc" v-html="equipment.description"></div>
        </div>
        <div :class="$style.manufacturer" v-if="equipment.manufacturer">
          <span>Производитель</span> {{ equipment.manufacturer }}
        </div>
      </div>
      <div :class="$style.gallery">
        <div
          v-for="item in equipment.images"
          :key="item.image"
          :class="$style.item"
        >
          <img :src="item.image" alt="" />
        </div>
      </div>
      <div :class="$style.videos" v-if="equipment.videos">
        <div
          v-for="item in equipment.videos"
          :key="item.video_file"
          :class="$style.item"
        >
          <video
            :src="item.video_file"
            autoplay
            muted
            loop
            playsinline
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
    await this.$store.dispatch('equipment/getItem', this.$route.params.id)
    console.log(this.equipment)
  },
  computed: {
    equipment() {
      return this.$store.state.equipment.item
    },
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
  .content {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      gap: 1.5rem;
      padding: 2rem 0 0 0;
      @include custom(590) {
        flex-direction: column;
      }
      .title {
        max-width: 35rem;
        font-size: 5rem;
        font-weight: 700;
        margin: 0 0 4rem 0;
        @include custom(950) {
          padding: 2rem 0 0 0;
          font-size: 4rem;
          margin: 0 0 2rem 0;
        }
        @include custom(750) {
          padding: 2rem 0 0 0;
          font-size: 3rem;
          margin: 0 0 1.5rem 0;
        }
        @include custom(590) {
          text-align: center;
        }
        @include custom(430) {
          font-size: 1.8rem;
        }
      }
      .img {
        width: 22.5rem;
        height: 22.5rem;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
        }
      }
    }
    .category {
      font-size: 1.375rem;
      font-weight: 400;
      line-height: 120%;
      margin: 0 0 2rem 0;
      @include custom(950) {
        font-size: 1.5rem;
      }
      @include custom(490) {
        font-size: 1rem;
      }
    }
    .bottom {
      display: grid;
      grid-template-columns: 3fr 1fr;
      align-items: baseline;
      gap: 1rem;
      @include custom(550) {
        grid-template-columns: 1fr;
      }
      .desc {
        font-weight: 400;
        line-height: 150%;
        margin: 0 0 4rem 0;
        @include custom(950) {
          margin: 0 0 2rem 0;
        }
      }
      .manufacturer {
        border-left: 1px solid white;
        padding-left: 1rem;
        font-weight: 400;
        margin: 0 0 4rem 0;
        span {
          display: block;
          font-size: 1.375rem;
          margin: 0 0 2rem 0;
          @include custom(550) {
            margin: 0 1rem 0 0;
            display: inline-block;
          }
        }
        @include custom(950) {
          font-size: 1.2rem;
          margin: 0 0 2rem 0;
        }
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
        min-height: 18rem;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
    .videos {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      // @include custom(760) {
      //   grid-template-columns: 1fr;
      // }
      .item {
        height: 30rem;
        max-width: 70rem;
        margin: 0 auto;
        @include custom(630) {
          height: 18rem;
          max-width: 50rem;
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
