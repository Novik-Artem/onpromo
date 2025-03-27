<template>
  <div :class="$style.content" id="projects">
    <div :class="$style.title">Проекты</div>
    <div :class="$style.grid">
      <div
        :class="$style.column"
        v-for="item in projects"
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
  .title {
    padding: 4rem 0 0 0;
    @include Title;
    text-transform: uppercase;
    margin: 0 0 4rem 0;
    @include custom(650) {
      margin: 0 0 2rem 0;
      padding: 2rem 0 0 0;
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
      // &:last-child {
      //   cursor: default;
      //   display: grid;
      //   grid-template-columns: 1fr 1fr;
      //   gap: 0.5rem;
      //   @include custom(560) {
      //     grid-template-columns: 1fr;
      //   }
      //   img {
      //     width: 100%;
      //     height: 100%;
      //   }
      //   .item {
      //     cursor: pointer;
      //     position: relative;
      //     .text {
      //       position: absolute;
      //       bottom: 0;
      //       left: 0;
      //       width: 100%;
      //       padding: 1.5rem 0;
      //       background-color: #000000d6;
      //       color: $white;
      //       display: flex;
      //       align-items: center;
      //       justify-content: center;
      //     }
      //   }
      // }
    }
  }
}
</style>
