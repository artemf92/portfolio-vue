<template>
  <section class="about">
      <div class="about__content">
        <div class="about__title">
          <div class="about__title-inner">
            <div class="about__title-word"
                    v-for="(word, index) of arrRow"
                    :key="index">
              <AnimItem :content="word"
                        :delay="index+10"
                        :typeAnim="'_textToTop'"
                        :preloader="true"/>
            </div>
          </div>
         </div>
      </div>
      <img class="about__cover" style="background-image: url('./images/cover1.jpg');" :style="coverTransform">
      <span class="mouse-down">
        <span class="mouse-wheel"></span>
      </span>
  </section>
</template>

<script>
import AnimItem from './Animations/AnimItem.vue';

export default {
  name: 'SectionAbout',
  components: {
    AnimItem,
  },
  data() {
    return {
      arrRow: [],
      sectionCover: './images/cover1.jpg',
      coverTransform: {
        transform: `matrix(1, 0, 0, 1, 0, 0)`
      },
      resource: null,
      data: {
        height: 0,
        width: 0,
        scrollFactor: 0
      },
      v1: 0,
    }
  },
  mounted() {
    const eventHandle = () => requestAnimationFrame(this.handleScroll);
    window.addEventListener('touchmove', eventHandle); //
    window.addEventListener('mousewheel', eventHandle);
    window.addEventListener('wheel', eventHandle);
    this.$on(`hook:destroyed`, () => {
      window.removeEventListener('scroll', eventHandle);
    });
  },
  unmounted() {
      window.removeEventListener('mousewheel', this.handleScroll)
      window.removeEventListener('wheel', this.handleScroll)
  },
  created() {
    setTimeout(() => {
      let arr = this.$store.state.dataJson.home.split(' ');
      this.arrRow = arr;
    }, 800)
  },
  methods: {
    handleScroll() {
      const containerRect = this.$el.getBoundingClientRect();
      if(containerRect.top < -window.innerHeight) return;
      const viewportOffsetTop = containerRect.top;

      const viewportOffsetBottom = - viewportOffsetTop - 1;

      this.data.scrollFactor = viewportOffsetBottom / 3000;
      this.coverTransform.transform = `matrix(${this.data.scrollFactor + 1}, 0, 0, ${this.data.scrollFactor + 1}, 0, ${this.data.scrollFactor * 1000})`;
    },
  }
}
</script>

<style lang="scss">
.about {
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 15px;
  overflow:hidden;
  background-color: transparent;

  &__content {
    color: #fff;
  }
  &__title {
    text-align: left;
    &-inner {
      max-width: 500px;

      div {
        height: 4vw;
        font-weight: 700;
        font-size: 36px;
        @media (min-width: 800px) {
          font-size: 30px;
        }
        @media (min-width: 992px) {
          font-size: 28px;
        }
      }
    }
    &-word {
      display: inline-block;
      margin-right: 10px;
    }
  }
  &__cover {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: .9;
    filter: var(--brightness-cover);
    //transition: transform 0.2s ease-in-out;
    background-size: cover;
    background-position: 50%;
    will-change: transform;
  }
}

@media (min-width: 480px) {
  .about {
    padding: 70px 40px;
  }
}
@media (min-width: 720px) {
  .about {
    padding: 100px;
    justify-content: flex-start;
    align-items: flex-end;
  }
}
</style>
