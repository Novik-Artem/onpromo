<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.menu">
        <div :class="$style.column">
          <div :class="$style.title">
            <span @click="$router.push('/projects')">Проекты</span>
          </div>
          <div :class="$style.item" v-for="item in projects" :key="item.id">
            <nuxt-link :to="'/projects/' + item.id" :class="$style.link">
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
        <div :class="$style.column">
          <div :class="$style.title">Услуги</div>
          <div :class="$style.item" v-for="item in services" :key="item.id">
            <nuxt-link to="/#services" :class="$style.link">
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
        <div :class="$style.column">
          <div :class="$style.title">Оборудование</div>
          <div :class="$style.item" v-for="item in equipment" :key="item.id">
            <nuxt-link :to="'/equipment/' + item.id" :class="$style.link">
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
        <div :class="$style.column">
          <div :class="$style.title">Контакты</div>
          <div>
            <a
              href="https://www.instagram.com/onpromo.by/"
              target="__blank"
              :class="$style.icon"
            >
              <img src="/icons/inst.svg" alt="" />
            </a>
          </div>
          <div>
            <a href="mailto:onpromoby@gmail.com">onpromoby@gmail.com</a>
          </div>
          <a href="tel:+37533643435"> +375 (33) 643-40-35</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.projects
    },
    services() {
      return this.$store.state.services.services
    },
    equipment() {
      return this.$store.state.equipment.equipment
    },
  },
}
</script>

<style lang="scss" module>
.footer {
  position: relative;
  z-index: 4;
  padding: 4rem 0;
  background-color: $black;
  color: $white;
  .container {
    @include container;
    .menu {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      text-transform: uppercase;
      @include custom(1000) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
      }
      @include custom(700) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .column {
        a {
          transition: all 0.3s ease-in-out;
          color: $white;
          &:hover {
            font-weight: 700;
          }
          display: block;
          margin: 0 0 1rem 0;
        }
        .title {
          margin: 0 0 2rem 0;
          font-weight: 700;
          span {
            cursor: pointer;
          }
        }
        .item {
          line-height: 120%;
          margin: 0 0 1rem 0;
          &:last-child {
            margin: 0;
          }
          .link {
            display: block;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            color: $white;
            &:hover {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
