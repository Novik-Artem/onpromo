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
          <div :class="$style.desc">
            {{ equipment.description }}
          </div>
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
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('equipment/getItem', this.$route.params.id)
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 3rem;
      gap: 1rem;
      @include custom(500) {
        grid-template-columns: 1fr;
      }
      .title {
        padding: 4rem 0 0 0;
        font-size: 5rem;
        font-weight: 700;
        margin: 0 0 4rem 0;
        @include custom(950) {
          padding: 2rem 0 0 0;
          font-size: 2rem;
          margin: 0 0 2rem 0;
        }
        @include custom(430) {
          font-size: 1.8rem;
        }
      }
      .img {
        max-width: 50rem;
        max-height: 50rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
        }
      }
    }
    .category {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.5rem;
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
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin: 0 0 4rem 0;
        @include custom(950) {
          font-size: 1.2rem;
          margin: 0 0 2rem 0;
        }
      }
      .manufacturer {
        font-size: 2rem;
        font-weight: 400;
        margin: 0 0 4rem 0;
        span {
          display: block;
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
