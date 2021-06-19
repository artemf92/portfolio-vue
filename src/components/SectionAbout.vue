<template>
  <section class="about">
      <div class="section__content">
        <div class="section__content--title">
          <div class="section__content--title-inner">
            <div class="section__content--title-word"
                    v-for="(word, index) of arrRow"
                    :key="index">
              <AnimItem :content="word"
                        :delay="index+30"
                        :typeAnim="'_textToTop'"
                        :preloader="true"/>
            </div>
          </div>
         </div>
      </div>
      <img class="section__cover" style="background-image: url('./images/cover1.jpg');" :style="coverTransform">
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
    this.$on(`hook:destroyed`, () => {
    window.removeEventListener('scroll', eventHandle);
    });
  },
  unmounted() {
      window.removeEventListener('mousewheel', handleScroll)
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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 15px;
  overflow:hidden;
  position: relative;
  background-color: transparent;
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
// }
// @media (min-width: 992px) {
//   .about {
//     padding: 100px;
//     justify-content: flex-start;
//     align-items: flex-end;
//   }
// }
.section__content {
  color: #fff;
  &--title {
    text-align: left;
    &-inner {
      max-width: 500px;
      @media (min-width: 700px) {
        // max-width: 800px;
      }

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
      display: inline-block; margin-right: 10px;
    }
  }

}
.section__cover {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: .9;
  filter: brightness(0.2);
  transition: transform 0.2 ease-in-out;

  background-size: cover;
  background-position: 50%;
  will-change: transform;
}
</style>
