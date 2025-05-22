<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">ONPROMO.BY</div>
      <div :class="$style.subtext">
        ПРОФЕССИОНАЛЬНОЕ СВЕТОВОЕ И ЗВУКОВОЕ ОБОРУДОВАНИЕ, СВЕТОДИОДНЫЕ ЭКРАНЫ,
        СЦЕНИЧЕСКИЕ КОНСТРУКЦИИ.
      </div>
      <a
        href="https://www.instagram.com/onpromo.by/"
        target="__blank"
        :class="$style.icon"
      >
        <img src="/icons/inst.svg" alt="" />
      </a>
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
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
      font-weight: 400;
      max-width: 35rem;
      line-height: 2rem;
      margin: 0 0 3rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
      }
    }
    .icon {
      cursor: pointer;
    }
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    z-index: 3;
    opacity: 50%;
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
