<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">Пакеты</div>
      <div :class="$style.tabs">
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'Пакет 450$' }]"
          @click="activeTab = 'Пакет 450$'"
        >
          <div><span>Пакет</span> 450$</div>
        </div>
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'Пакет 600$' }]"
          @click="activeTab = 'Пакет 600$'"
        >
          <div><span>Пакет</span> 600$</div>
        </div>
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'Пакет 650$' }]"
          @click="activeTab = 'Пакет 650$'"
        >
          <div><span>Пакет</span> 650$</div>
        </div>
        <div
          :class="[$style.tab, { [$style.active]: activeTab === 'Пакет 800$' }]"
          @click="activeTab = 'Пакет 800$'"
        >
          <div><span>Пакет</span> 800$</div>
        </div>
      </div>
      <div :class="$style.packages">
        <div :class="$style.package" v-for="item in packages" :key="item.title">
          <div v-if="item.name === activeTab">
            <div :class="$style.packageTitle">{{ item.name }}</div>
            <div :class="$style.image">
              <img :src="item.preview_image" alt="" />
            </div>
            <div :class="$style.videos">
              <div
                v-for="video in item.videos"
                :key="video"
                :class="$style.video"
              >
                <video
                  :src="video.video_file"
                  autoplay
                  muted
                  loop
                  playsinline
                ></video>
              </div>
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
      activeTab: 'Пакет 450$',
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
        margin: 0 auto 2rem auto;
        object-fit: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .video {
        &:first-child {
          max-width: 50rem;
          height: 100vh;
          margin: 0 auto 2rem auto;
        }
        &:nth-child(2) {
          max-width: 50rem;
          max-height: 50rem;
          margin: 0 auto 2rem auto;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .smeta {
        max-width: 50rem;
        //max-height: 50rem;
        margin: 0 auto;
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
