<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">{{ service.name }}</div>
      <div :class="$style.desc">
        {{ service.description }}
      </div>
      <div :class="$style.img">
        <img :src="service.image" alt="" />
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
  .content {
    .title {
      padding: 5rem 0 0 0;
      text-align: center;
      @include Title;
      margin: 0 0 5rem 0;
      @include custom(950) {
        padding: 2rem 0 0 0;
        font-size: 2rem;
        margin: 0 0 2rem 0;
      }
      @include custom(430) {
        font-size: 1.8rem;
      }
    }
    .desc {
      font-size: 2rem;
      font-weight: 400;
      max-width: 50rem;
      line-height: 2rem;
      margin: 0 auto 3rem auto;
      @include custom(950) {
        font-size: 1.2rem;
      }
    }
    .img {
      max-width: 50rem;
      max-height: 50rem;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
  }
}
</style>
