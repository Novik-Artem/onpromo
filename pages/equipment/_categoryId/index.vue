<template>
  <div :class="$style.container">
    <div :class="$style.banner">
      <div :class="$style.bg"></div>
      <video
        :src="category.video_file"
        autoplay
        muted
        loop
        playsinline
        :class="$style.video"
        v-if="category.video_file"
      ></video>
      <img v-else :src="category.banner" alt="" :class="$style.image" />
    </div>
    <div :class="$style.content">
      <div :class="$style.top">
        <div :class="$style.title">{{ category.name }}</div>
        <div :class="$style.desc">{{ category.description }}</div>
      </div>
      <div :class="$style.items">
        <div
          :class="$style.item"
          v-for="el in category.children"
          :key="el.name"
        >
          <div :class="$style.subCategory">{{ el.name }}</div>
          <div :class="$style.cards">
            <div
              :class="$style.card"
              v-for="item in el.equipments"
              :key="item.id"
              @click="open(item.id, item)"
            >
              <div :class="$style.name">{{ item.name }}</div>
              <div :class="$style.image">
                <img :src="item.image" alt="" />
              </div>
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
    await this.$store.dispatch('equipment/getEquipment')
    const equipment = this.$store.state.equipment.equipment.find(
      (i) => i.id == this.$route.params.categoryId
    )
    this.$store.commit('equipment/setCategory', equipment)
  },
  computed: {
    category() {
      return this.$store.state.equipment.category
    },
  },
  methods: {
    open(id, item) {
      this.$store.commit('equipment/setItem', item)
      this.$router.push(`/equipment/${this.$route.params.categoryId}/${id}`)
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
    .top {
      position: absolute;
      top: 6rem;
      z-index: 3;
    }
    .title {
      text-transform: uppercase;
      max-width: 45rem;
      @include BigTitle;
      margin: 0 0 3rem 0;
      @include custom(750) {
        font-size: 3.2rem;
        margin: 0 0 1rem 0;
      }
      @include custom(640) {
        font-size: 3rem;
      }
      @include custom(500) {
        max-width: 25rem;
        font-size: 2.3rem;
      }
    }
    /*.title {
      @include BigTitle;
      max-width: 12rem;
      margin: 0 0 3rem 0;
      @include custom(750) {
        font-size: 2.8rem;
        margin: 0 0 1rem 0;
      }
      @include custom(400) {
        font-size: 2.4rem;
      }
    }*/
    .desc {
      text-transform: uppercase;
      margin: 0 0 4rem 0;
    }
    .items {
      padding-top: 32rem;
      @include custom(750) {
        padding-top: 22rem;
      }
      .item {
        margin: 0 0 4rem 0;
        .subCategory {
          margin: 0 0 2rem 0;
          font-size: 3rem;
          font-weight: 700;
          @include custom(660) {
            font-size: 1.75rem;
          }
        }
        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          gap: 0.5rem;
          @include custom(1000) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @include custom(860) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          @include custom(660) {
            grid-template-columns: 1fr 1fr;
          }
          .card {
            position: relative;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            bottom: 0;
            &:hover {
              bottom: 1rem;
            }
            .name {
              position: absolute;
              top: 30%;
              left: 1rem;
              z-index: 3;
              font-weight: 700;
              font-size: 1.375rem;
              line-height: 120%;
            }
            .image {
              height: 200px;
              position: relative;
              &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: $black;
                opacity: 30%;
              }
              img {
                border-radius: 0.5rem;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
}
</style>
