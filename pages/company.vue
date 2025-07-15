<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">О компании</div>
      <div :class="$style.subtext">
        <nuxt-link to="/" :class="$style.link">ONPROMO.BY</nuxt-link> –
        динамично развивающаяся компания в сфере проката концертного
        оборудования с 2016 года. Мы не просто арендуем технику – мы создаём
        техническую основу для ярких событий: от LED-экранов, звука и света до
        строительства сценических конструкций. Наш парк оборудования постоянно
        обновляется, а команда растёт, чтобы предлагать клиентам самые
        современные решения и безупречный сервис. Ваши идеи заслуживают лучшего
        технического воплощения – доверьте их
        <nuxt-link to="/" :class="$style.link">ONPROMO.BY</nuxt-link>
      </div>
      <!-- <a
        href="https://www.instagram.com/onpromo.by/"
        target="__blank"
        :class="$style.icon"
      >
        <img src="/icons/inst.svg" alt="" />
      </a> -->
    </div>
    <div :class="$style.media">
      <div :class="$style.bg"></div>
      <div :class="$style.video">
        <video src="/videos/about.mp4" autoplay muted playsinline loop></video>
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

  @include custom(990) {
    flex-direction: column;
    align-items: start;
  }
  .content {
    @include custom(990) {
      order: 2;
    }
    .title {
      padding: 5rem 0 0 0;
      @include Title;
      margin: 0 0 2rem 0;

      @include custom(990) {
        padding: 1rem 0 0 0;
      }
      @include custom(650) {
        margin: 0 0 1rem 0;
      }
      @include custom(460) {
        margin: 0 0 1rem 0;
        font-size: 3.6rem;
      }
    }
    .subtext {
      font-weight: 400;
      max-width: 35rem;
      line-height: 140%;
      margin: 0 0 3rem 0;
      @include custom(990) {
        max-width: none;
      }
      .link {
        color: $white;
      }
      @include custom(650) {
        margin: 0 0 2rem 0;
      }
    }
    .icon {
      cursor: pointer;
    }
  }
  .media {
    position: relative;
    .video {
      max-width: 50rem;
      max-height: 100%;
      @include custom(1140) {
        max-width: 35rem;
        max-height: 50rem;
      }
      @include custom(990) {
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
