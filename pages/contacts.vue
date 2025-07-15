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

    <div :class="$style.media">
      <div :class="$style.bg"></div>
      <div :class="$style.video">
        <video
          src="/videos/contacts.mp4"
          autoplay
          muted
          playsinline
          loop
        ></video>
      </div>
      <div :class="$style.bg2"></div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  @include container;
  display: flex;
  align-items: center;
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
        margin: 0 0 1rem 0;
      }
    }
    .subtext {
      font-size: 1.375rem;
      font-weight: 400;
      max-width: 50rem;
      line-height: 2rem;
      margin: 0 0 2rem 0;
      @include custom(650) {
        margin: 0 0 1rem 0;
        font-size: 1.2rem;
      }
    }
    a {
      display: block;
      margin: 0 0 2rem 0;
      color: $white;
      font-size: 1.2rem;
      @include custom(650) {
        margin: 0 0 1rem 0;
      }
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
  .media {
    position: relative;
    .video {
      max-width: 50rem;
      max-height: 100%;
      @include custom(1050) {
        max-width: 35rem;
        max-height: 50rem;
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
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 20%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgb(0, 0, 0),
        rgb(0, 0, 0),
        rgba(0, 0, 0, 0) 71%
      );
      z-index: 3;
    }
    .bg2 {
      position: absolute;
      top: 0;
      right: 0;
      width: 20%;
      height: 100%;
      background: linear-gradient(
        270deg,
        rgb(0, 0, 0),
        rgb(0, 0, 0),
        rgba(0, 0, 0, 0) 71%
      );
      z-index: 3;
    }
  }
}
</style>
