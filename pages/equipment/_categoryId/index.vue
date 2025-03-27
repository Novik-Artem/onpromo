<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">{{ category.name }}</div>
      <div :class="$style.desc">{{ category.description }}</div>
      <div :class="$style.item" v-for="el in category.children" :key="el.name">
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
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('equipment/getEquipment')
    this.$store.commit(
      'equipment/setCategory',
      this.$store.state.equipment.equipment[this.$route.params.categoryId - 1]
    )
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
  .content {
    .title {
      padding: 5rem 0 0 0;
      @include Title;
      max-width: 12rem;
      margin: 0 0 3rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
      }
    }
    .desc {
      font-size: 2rem;
      margin: 0 0 4rem 0;
    }
    .item {
      margin: 0 0 4rem 0;
      .subCategory {
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
      }
      .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
        @include custom(460) {
          grid-template-columns: 1fr;
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
            top: 50%;
            transform: translate(0, -50%);
            left: 1rem;
            font-size: 1.3rem;
          }
          .image {
            img {
              border-radius: 0.5rem;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
