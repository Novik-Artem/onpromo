<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.logo" @click="$router.push('/')">
        <img src="/images/logo.jpg" alt="" />
      </div>
      <div :class="$style.burger" @click="openBurger">
        <img src="/icons/burger.svg" alt="" v-if="!isBurgerOpen" />
        <img src="/icons/cross-white.svg" alt="" :class="$style.cross" v-else />
      </div>
      <div :class="[$style.menu, { [$style.open]: isBurgerOpen }]">
        <div v-for="item in links" :key="item.text">
          <nuxt-link :to="item.link">
            <div @click="closeBurger" :class="$style.link">{{ item.text }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Проекты',
          link: '/' + '#projects',
        },
        {
          text: 'Услуги',
          link: '/' + '#services',
        },
        {
          text: 'Оборудование',
          link: '/' + '#equipment',
        },
        {
          text: 'О компании',
          link: '/company',
        },
        {
          text: 'Контакты',
          link: '/contacts',
        },
      ],
    }
  },
  computed: {
    isBurgerOpen() {
      return this.$store.state.popups.isBurgerOpen
    },
  },
  methods: {
    openBurger() {
      this.$store.commit('popups/openBurger')
      document.body.classList.toggle('lock')
    },
    closeBurger() {
      this.$store.commit('popups/resetBurger')
      document.body.classList.remove('lock')
    },
  },
}
</script>

<style lang="scss" module>
.header {
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: $black;
  color: $white;
  .container {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .logo {
      cursor: pointer;
      position: relative;
      z-index: 5;
      max-width: 5rem;
      max-height: 5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 3rem;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;
      &.open {
        left: 0;
      }
      @include custom(870) {
        gap: 1rem;
      }
      @include custom(768) {
        position: absolute;
        top: 0;
        left: -100vw;
        width: 100vw;
        height: 100vh;
        background-color: $black;
        z-index: 4;
        padding-top: 10rem;
        flex-direction: column;
        font-size: 1.7rem;
      }
      .link {
        color: $white;
        cursor: pointer;
        background-image: linear-gradient(white, white);
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: 0% 0.125rem;
        transition: background-size 0.3s;
        padding-bottom: 0.125rem;
        &:hover {
          background-size: 100% 0.125rem;
        }
      }
    }
    .burger {
      display: none;
      @include custom(768) {
        display: block;
        cursor: pointer;
        max-width: 2rem;
        max-height: 2rem;
        position: relative;
        z-index: 5;
        img {
          width: 100%;
          height: 100%;
        }
        .cross {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>
