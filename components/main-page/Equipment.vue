<template>
  <div :class="$style.content" id="equipment">
    <div :class="[$style.title, $style.long]">оборудование</div>
    <div :class="$style.services">
      <div
        :class="$style.item"
        v-for="item in equipment"
        :key="item.id"
        @click="open(item.id, item)"
      >
        <div :class="$style.image">
          <img :src="item.preview_image" alt="" />
        </div>
        <div :class="$style.text">
          {{ item.name }}
        </div>
        <div :class="$style.desc">
          <div :class="$style.subtitle">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    equipment() {
      return this.$store.state.equipment.equipment
    },
  },
  methods: {
    open(categoryId, item) {
      this.$store.commit('equipment/setCategory', item)
      this.$router.push(`/equipment/${categoryId}`)
    },
  },
}
</script>

<style lang="scss" module>
.title {
  padding: 4rem 0 0 0;
  @include Title;
  text-transform: uppercase;
  margin: 0 0 2rem 0;
  @include custom(650) {
    padding: 2rem 0 0 0;
  }
  &.long {
    @include custom(730) {
      font-size: 3.2rem;
    }
    @include custom(480) {
      font-size: 2.375rem;
    }
  }
}
.services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  @include custom(1060) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @include custom(940) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include custom(700) {
    grid-template-columns: 1fr 1fr;
  }
  @include custom(520) {
    grid-template-columns: 1fr;
  }
  .item {
    position: relative;
    .desc {
      position: absolute;
      width: 100%;
      height: 0;
      top: 0;
      left: 0;
      background-color: $black;
      transition: all 0.3s ease-in-out;
      z-index: -1;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      border-radius: 0.5rem;
      @include custom(1024) {
        display: none;
      }
      .subtitle {
        font-size: 1.5rem;
      }
    }
    &:hover {
      .desc {
        height: 100%;
        z-index: 2;
        cursor: pointer;
      }
    }
    .text {
      position: absolute;
      top: 40%;
      left: 1rem;
      font-size: 1.5rem;
      max-width: 12rem;
      font-weight: 500;
      display: -webkit-box;
      display: box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1;
    }
    .image {
      height: 13.75rem;
      width: 100%;
      img {
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
