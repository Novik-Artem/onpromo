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
    <div :class="$style.video">
      <video src="/videos/about.mp4" autoplay muted playsinline loop></video>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  @include container;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;

  @include custom(920) {
    align-items: center;
    gap: 1rem;
  }
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
      @include custom(650) {
        margin: 0 0 1rem 0;
      }
      @include custom(990) {
        padding: 1rem 0 0 0;
      }
    }
    .subtext {
      font-weight: 400;
      max-width: 35rem;
      line-height: 140%;
      margin: 0 0 3rem 0;
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
  .video {
    max-width: 40rem;
    max-height: 40rem;
    @include custom(1150) {
      max-width: 35rem;
      max-height: 30rem;
    }
    @include custom(1065) {
      max-width: 30rem;
      max-height: 25rem;
    }
    @include custom(990) {
      max-width: none;
      max-height: 35rem;
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
