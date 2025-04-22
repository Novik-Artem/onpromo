<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">О компании</div>
      <div :class="$style.subtext">
        Blackout studio была основана в 2009, чтобы представлять комплексные
        технические решения для проведения мероприятий, таких как музыкальные
        фестивали, концерты, туры исполнителей и телевизионные съемки. За
        прошедшие годы компания существенно выросла. Постоянно обновляющийся
        парк оборудования, высокий технический уровень персонала и
        индивидуальный подход к каждому проекту позволяют решить практически
        любую задачу в сфере концертного и ТВ продакшна.
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
