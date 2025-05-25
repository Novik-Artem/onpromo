<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">Контакты</div>
      <div :class="$style.subtext">Всегда на связи</div>
      <a href="mailto:onpromoby@gmail.com">onpromoby@gmail.com</a>
      <a href="tel:+375336434035"> +375 (33) 643-40-35</a>
      <div :class="$style.icons">
        <a
          href="https://www.instagram.com/onpromo.by/"
          target="__blank"
          :class="$style.icon"
        >
          <img src="/icons/inst.svg" alt="" />
        </a>
        <a href="https://t.me/onpromoby" target="__blank" :class="$style.icon">
          <img
            src="/icons/telegram.svg"
            alt=""
            :class="[$style.icon, $style.tg]"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  @include container;
  .content {
    .title {
      padding: 5rem 0 0 0;
      @include Title;
      margin: 0 0 3rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
      }
    }
    .subtext {
      font-size: 1.375rem;
      font-weight: 400;
      max-width: 50rem;
      line-height: 2rem;
      margin: 0 0 2rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
      }
    }
    a {
      display: block;
      margin: 0 0 2rem 0;
      color: $white;
      font-size: 1.2rem;
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 1rem;
      .icon {
        cursor: pointer;
        width: 3.125rem;
        height: 3.125rem;
        &.tg {
          position: relative;
          top: 0.125rem;
          width: 2.85rem;
          height: 2.85rem;
        }
      }
    }
  }
}
</style>
