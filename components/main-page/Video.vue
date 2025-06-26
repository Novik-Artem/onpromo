<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">ONPROMO.BY</div>
      <div :class="$style.subtext">
        ПРОФЕССИОНАЛЬНОЕ СВЕТОВОЕ И ЗВУКОВОЕ ОБОРУДОВАНИЕ, СВЕТОДИОДНЫЕ ЭКРАНЫ,
        СЦЕНИЧЕСКИЕ КОНСТРУКЦИИ.
      </div>
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
      <a href="tel:+375336434035" :class="$style.phone"> +375 (33) 643-40-35</a>
    </div>
    <div :class="$style.bg"></div>
    <video
      src="/videos/main.mp4"
      autoplay
      muted
      playsinline
      loop
      :class="$style.video"
    ></video>
  </div>
</template>

<style lang="scss" module>
.container {
  position: relative;
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @include custom(830) {
    min-height: 0;
    padding-top: 3rem;
    padding-bottom: 1rem;
  }
  .content {
    position: relative;
    z-index: 4;
    padding: 0 0 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      @include Title;
      margin: 0 0 4rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
        font-size: 3.2rem;
      }
      @include custom(480) {
        font-size: 2.375rem;
      }
    }
    .subtext {
      text-transform: uppercase;
      font-size: 1.125rem;
      font-weight: 500;
      max-width: 35rem;
      line-height: 2rem;
      margin: 0 0 3rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
        font-size: 0.95rem;
        line-height: 130%;
      }
      @include custom(490) {
        font-size: 0.85rem;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0 0 1rem 0;
      .icon {
        width: 3.125rem;
        height: 3.125rem;
        cursor: pointer;
        &.tg {
          position: relative;
          top: 0.125rem;
          width: 2.85rem;
          height: 2.85rem;
        }
      }
    }
    .phone {
      color: $white;
    }
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgb(0, 0, 0),
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0) 71%
    );
    z-index: 3;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }
}
</style>
