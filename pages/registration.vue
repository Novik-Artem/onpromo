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
          placeholder="имя"
          v-model="user.firstname"
          required
        />
        <input
          :class="$style.input"
          type="text"
          placeholder="фамилия"
          v-model="user.lastname"
          required
        />
        <input
          :class="$style.input"
          type="text"
          placeholder="логин"
          v-model="user.name"
          required
        />
        <div :class="$style.password">
          <input
            :class="$style.input"
            :type="passwordType"
            placeholder="пароль"
            v-model="user.password"
            required
          />
          <div :class="$style.eye" @click="changePasswordType">
            <img v-if="passwordType === 'text'" src="/icons/eye.svg" alt="" />
            <img
              v-if="passwordType === 'password'"
              src="/icons/eye-close.svg"
              alt=""
            />
          </div>
        </div>
        <input
          :class="$style.input"
          type="password"
          placeholder="подтвердите пароль"
          v-model="user.password2"
          required
        />
        <div :class="$style.error" v-if="errors.username">
          {{ errors.username }}
        </div>
        <div :class="$style.error" v-if="errors.password">
          {{ errors.password }}
        </div>
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
        firstname: '',
        lastname: '',
        password: '',
        password2: '',
      },
      errors: {
        username: '',
        password: '',
        other: '',
      },
      passwordType: 'password',
    }
  },
  methods: {
    async registration() {
      if (this.user.password !== this.user.password2) {
        this.errors.password = 'пароли должны совпадать'
      } else {
        const value = await Registration.registration(this.user)
        if (value.username && typeof value.username !== 'string') {
          this.errors.username = 'Пользователь с таким именем уже существует'
          return
        }
        if (this.user.password.length <= 8) {
          this.errors.password = 'Пароль должен быть не менее 8 символов'
          return
        }
        if (
          value.password?.[0] ==
          'Введённый пароль слишком широко распространён.'
        ) {
          this.errors.password = 'Введённый пароль слишком широко распространён'
        } else {
          this.$router.push('/auth')
        }
      }
    },
    changePasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
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
      .password {
        position: relative;
        .eye {
          cursor: pointer;
          position: absolute;
          top: 0.8rem;
          right: 1rem;
        }
      }
      .error {
        color: red;
        font-size: 0.85rem;
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
