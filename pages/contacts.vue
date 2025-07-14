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
    <div :class="$style.video">
      <video src="/videos/contacts.mp4" autoplay muted playsinline loop></video>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  @include container;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  @include custom(920) {
    align-items: center;
    gap: 1rem;
  }
  @include custom(860) {
    flex-direction: column;
    align-items: start;
  }

  .content {
    @include custom(860) {
      order: 2;
    }
    .title {
      padding: 3rem 0 0 0;
      @include Title;
      margin: 0 0 3rem 0;
      @include custom(650) {
        margin: 0 0 1rem 0;
      }
      @include custom(860) {
        padding: 1rem 0 0 0;
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
  .video {
    max-width: 40rem;
    max-height: 40rem;
    @include custom(1230) {
      max-width: 30rem;
      max-height: 30rem;
    }
    @include custom(860) {
      max-width: none;
      order: 1;
      padding-top: 2rem;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
