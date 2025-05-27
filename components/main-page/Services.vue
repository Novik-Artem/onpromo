<template>
  <div :class="$style.content" id="services">
    <div :class="$style.title">Услуги</div>
    <div :class="$style.services">
      <div
        :class="[$style.item, { [$style.active]: activeItem === index }]"
        v-for="(item, index) in services"
        :key="item.id"
        @click="openDesc(index)"
      >
        <div :class="$style.image">
          <img :src="item.image" alt="" />
        </div>
        <div :class="$style.text">
          {{ item.name }}
        </div>
        <div :class="$style.desc">
          <div :class="$style.subtitle">{{ item.name }}</div>
          <div :class="$style.subtext">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: '',
    }
  },
  computed: {
    services() {
      return this.$store.state.services.services
    },
  },
  methods: {
    openDesc(index) {
      this.activeItem === index
        ? (this.activeItem = '')
        : (this.activeItem = index)
    },
  },
}
</script>

<style lang="scss" module>
.content {
  padding-top: 3rem;
  @include custom(650) {
    padding-top: 5rem;
  }
  .title {
    padding: 4rem 0 0 0;
    @include Title;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
    @include custom(650) {
      padding: 2rem 0 0 0;
      font-size: 3.2rem;
    }
    @include custom(480) {
      font-size: 2.375rem;
    }
  }
  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    @include custom(1015) {
      grid-template-columns: 1fr 1fr;
    }
    @include custom(620) {
      grid-template-columns: 1fr;
    }
    .item {
      position: relative;
      &:hover {
        .desc {
          height: 100%;
          z-index: 2;
        }
      }
      @include tablet {
        &:hover {
          .desc {
            height: 0;
            z-index: -1;
          }
        }
      }
      &.active {
        .desc {
          height: 100%;
          z-index: 2;
        }
      }
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
        border-radius: 0.5rem;
        gap: 1rem;
        .subtitle {
          font-size: 1.5rem;
          @include custom(640) {
            font-size: 1.2rem;
          }
        }
        .link {
          cursor: pointer;
        }
      }
      .text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1rem;
        font-size: 1.8rem;
        max-width: 18rem;
        font-weight: 500;
        display: -webkit-box;
        display: box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1;
        max-height: 3em;
        @include custom(1015) {
          font-size: 1.5rem;
          max-width: 15rem;
        }
        @include custom(620) {
          font-size: 1.5rem;
          max-width: 20rem;
        }
      }
      .image {
        height: 18rem;
        width: 100%;
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
</style>
