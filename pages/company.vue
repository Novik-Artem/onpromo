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
      <a
        href="https://www.instagram.com/onpromo.by/"
        target="__blank"
        :class="$style.icon"
      >
        <img src="/icons/inst.svg" alt="" />
      </a>
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
      margin: 0 0 5rem 0;
      @include custom(650) {
        margin: 0 0 2rem 0;
      }
    }
    .subtext {
      font-weight: 400;
      max-width: 50rem;
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
}
</style>
