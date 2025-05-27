<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">Пакеты</div>
      <div :class="$style.tabs">
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'пакет 420' }]"
          @click="activeTab = 'пакет 420'"
        >
          <div><span>Пакет</span> 420</div>
        </div>
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'пакет 600' }]"
          @click="activeTab = 'пакет 600'"
        >
          <div><span>Пакет</span> 600</div>
        </div>
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'пакет 620' }]"
          @click="activeTab = 'пакет 620'"
        >
          <div><span>Пакет</span> 620</div>
        </div>
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'пакет 800' }]"
          @click="activeTab = 'пакет 800'"
        >
          <div><span>Пакет</span> 800</div>
        </div>
      </div>
      <div :class="$style.packages">
        <div :class="$style.package" v-for="item in packages" :key="item.title">
          <div v-if="item.name === activeTab">
            <div :class="$style.packageTitle">{{ item.name }}</div>
            <div :class="$style.image">
              <img :src="item.preview_image" alt="" />
            </div>
            <div
              :class="$style.video"
              v-for="video in item.videos"
              :key="video"
            >
              <video
                :src="video.video_file"
                autoplay
                muted
                loop
                playsinline
              ></video>
            </div>
            <div :class="$style.smeta">
              <img :src="item.image" alt="" />
            </div>
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
  data() {
    return {
      activeTab: 'пакет 420',
    }
  },
}
</script>

<style lang="scss" module>
.container {
  @include container;
  .content {
    .title {
      display: none;
      @include custom(670) {
        display: block;
        padding-top: 3rem;
        font-size: 2.5rem;
        font-weight: 700;
      }
    }
    .tabs {
      border-top: 1px solid $white;
      border-bottom: 1px solid $white;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin: 3rem 0;
      @include custom(670) {
        span {
          display: none;
        }
      }
      .tab {
        cursor: pointer;
        padding: 1.5rem;
        border-right: 1px solid $white;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        div {
          font-size: 1.25rem;
          color: $white;
          opacity: 70%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          @include custom(390) {
            font-size: 1rem;
          }
        }
        &:first-child {
          border-left: 1px solid $white;
        }
        &.active {
          div {
            opacity: 100%;
            font-weight: 700;
          }
        }
      }
    }
    .package {
      .packageTitle {
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
