<template>
  <div :class="$style.content">
    <div :class="$style.title" @click="$router.push('/projects')">
      <span>Проекты</span>
    </div>
    <div :class="$style.grid">
      <div
        :class="$style.column"
        v-for="item in projects.slice(0, 4)"
        :key="item.id"
        @click="open(item.id, item)"
      >
        <div :class="$style.image">
          <img :src="item.preview_image" alt="" />
        </div>
        <div :class="$style.text">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.projects
    },
  },
  methods: {
    open(id, item) {
      this.$store.commit('projects/setProject', item)
      this.$router.push(`/projects/${id}`)
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
    span {
      cursor: pointer;
      position: relative;
      &:hover {
        &::after {
          opacity: 1;
          right: -3.5rem;
        }
      }
      &::after {
        transition: all 0.3s ease-in-out;
        opacity: 0;
        content: '>';
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 0;
      }
    }
    @include custom(650) {
      padding: 2rem 0 0 0;
      font-size: 3.2rem;
    }
    @include custom(480) {
      font-size: 2.375rem;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    @include custom(810) {
      grid-template-columns: 1fr;
    }
    .column {
      position: relative;
      cursor: pointer;
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
      .image {
        height: 30rem;
        width: 100%;
        @include custom(650) {
          height: 20rem;
        }
        img {
          object-fit: cover;
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
