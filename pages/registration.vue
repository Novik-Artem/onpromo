<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div :class="$style.logo">
        <img src="/images/logo.jpg" alt="" />
      </div>
      <div :class="$style.login">
        Чтобы попасть на эту страницу, авторизуйтесь
      </div>
      <div :class="$style.tabs">
        <nuxt-link to="/auth" :class="$style.tab">Авторизация</nuxt-link>
        <div :class="$style.tab">Регистрация</div>
      </div>
      <form :class="$style.form" @submit.prevent="registration">
        <input
          :class="$style.input"
          type="text"
          placeholder="логин"
          v-model="user.name"
        />
        <input
          :class="$style.input"
          type="password"
          placeholder="пароль"
          v-model="user.password"
        />
        <input
          :class="$style.input"
          type="password"
          placeholder="подтвердите пароль"
          v-model="user.password2"
        />
        <button :class="$style.button">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
import Registration from '~/api/registration'
export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
        password2: '',
      },
    }
  },
  methods: {
    async registration() {
      const value = await Registration.registration(this.user)
      if (value) {
        this.$router.push('/auth')
      } else {
        this.$router.push('/registration')
      }
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  .content {
    padding: 2rem;
    max-width: 25rem;
    margin: 0 auto;
    background-color: $black;
    color: $white;
    .logo {
      max-width: 10rem;
      max-height: 10rem;
      margin: 0 auto 3rem auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .login {
      text-align: center;
      line-height: 1.2rem;
      font-size: 1rem;
      margin: 0 0 3rem 0;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 0 0 3rem 0;
      .tab {
        color: $white;
        &:last-child {
          border-bottom: 1px solid $white;
        }
      }
    }
    .form {
      .input {
        border: 1px solid $white;
        display: block;
        width: 100%;
        padding: 1rem;
        background-color: $black;
        color: $white;
        border-radius: 1.5rem;
        margin: 0 0 1.5rem 0;
      }
      .button {
        border: 1px solid $white;
        display: block;
        width: 100%;
        padding: 1rem;
        background-color: $black;
        color: $white;
        border-radius: 1.5rem;
        transition: all 0.3s ease-in-out;
        &:hover {
          border: 1px solid $black;
          background-color: $white;
          color: $black;
        }
      }
    }
  }
}
</style>
