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
        <div :class="$style.tab">Авторизация</div>
        <nuxt-link to="registration" :class="$style.tab">Регистрация</nuxt-link>
      </div>
      <form :class="$style.form" @submit.prevent="auth">
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
        <div :class="$style.error" v-if="error">
          {{ error.non_field_errors[0] }} <br />
          <p>
            Возможно вы еще не получили подтверждение регистрации, в таком
            случае попробуйте позже.
          </p>
          <p>
            Если регистрация подтверждена - проверьте правильность введенных
            данных
          </p>
        </div>
        <button :class="$style.button">войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import Auth from '~/api/auth'
export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
      error: null,
      passwordType: 'password',
    }
  },
  methods: {
    async auth() {
      if (this.user.name !== '' && this.user.password !== '') {
        const value = await Auth.login(this.user)
        if (value.token && value.token !== 'undefined') {
          localStorage.setItem('token', value.token)
          this.$router.push('/media')
        } else {
          this.error = value
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
        &:first-child {
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
      .error {
        color: red;
        font-size: 0.85rem;
        margin: 0 0 1.5rem 0;
        p {
          margin: 0.5rem 0 0 0;
        }
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
