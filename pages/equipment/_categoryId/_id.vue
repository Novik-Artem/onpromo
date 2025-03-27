<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">{{ equipment.name }}</div>
      <div :class="$style.category">
        Категория: {{ equipment.category.name }}
      </div>
      <div :class="$style.img">
        <img :src="equipment.image" alt="" />
      </div>
      <div :class="$style.desc">
        {{ equipment.description }}
      </div>
      <div :class="$style.manufacturer">
        Производитель: {{ equipment.manufacturer }}
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
    .category {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2rem;
      margin: 0 0 4rem 0;
      @include custom(950) {
        font-size: 1.5rem;
        margin: 0 0 2rem 0;
      }
      @include custom(490) {
        font-size: 1rem;
      }
    }
    .desc {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2rem;
      margin: 0 0 4rem 0;
      @include custom(950) {
        font-size: 1.2rem;
        margin: 0 0 2rem 0;
      }
    }
    .img {
      max-width: 50rem;
      max-height: 50rem;
      margin: 0 auto 4rem auto;
      @include custom(950) {
        margin-bottom: 2rem;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
  }
}
</style>
