<template>
  <div>
    <div class="container">
      <AnimItem 
        :typeAnim="'_textToTop'">
        <h2 class="section__title text-left">Портфолио</h2>
      </AnimItem>
      <div class="portfolio-inner">
        <div class="portfolio-desc">
          <AnimItem 
            :typeAnim="'_textToTop'"
            :delay="5">
            <h3 class="portfolio__item--title" ref='slideTitle'>{{ $store.state.dataJson.slides[0]['title']}}</h3>
            <div class="portfolio__item--desc" ref='slideContent'>{{ $store.state.dataJson.slides[0]['content']}}</div>
          </AnimItem>
          <AnimItem
            :typeAnim="'_textToTop'"
            :delay="10"
            class="msg-btn">
              <a :href="$store.state.dataJson.slides[0]['href']" ref='slideHref' class="link btn-say">Перейти</a>
          </AnimItem>
        </div>
        <div class="image-container">
          <carousel :perPage="1"
                    :speed="700"
                    @page-change="handleSlideClick"
                    >
            <slide v-for="(slide, index) of $store.state.dataJson.slides" 
                  :key="index">
                <ImageItem class="carousel-img"
                          :source="dir+slide.src"/>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import ImageItem from './ImageItem';
import AnimItem from './Animations/AnimItem';

export default {
  name: 'SectionPortfolio',
  components: {
    Carousel,
    Slide,
    ImageItem,
    AnimItem,
  },
  props: {
    typeAnim: {
      type: String,
      required: true
    },
  },
  data(){
    return{
      dir: './images/'
    }
  },
  computed: {
  },
  methods:{
    handleSlideClick(num) {
      this.$refs.slideTitle.style.animation = `barabanOut .2s ease forwards`;
      setTimeout(() => {
        this.$refs.slideContent.style.animation = `barabanOut .2s ease forwards`;
      },200)
      setTimeout(() => {
        this.$refs.slideTitle.textContent = this.$store.state.dataJson.slides[num]['title'];
      },200)
      setTimeout(() => {
        this.$refs.slideContent.textContent = this.$store.state.dataJson.slides[num]['content'];
      },300)
      setTimeout(() => {
        this.$refs.slideTitle.style.animation = `barabanIn .5s ease forwards`;
      },500)
      setTimeout(() => {
        this.$refs.slideContent.style.animation = `barabanIn .5s ease forwards`;
      },650)
      this.$refs.slideHref.href = this.$store.state.dataJson.slides[num]['href'];
    }
  },
}
</script>

<style lang="scss">
section.portfolio {
  // height: calc(100vh - 30px);
  color: grey;
}
.page_portfolio {
  
  padding-top: 50px;
  @media (min-width: 992px) {
    padding-top: 0;
    height: 100vh;
  }
}
.section {
  &__title {
    font-size: 3em;
    @media (min-width: 992px) {
      font-size: 4em;
    }
    // margin-bottom: 8%;
  }
}
.portfolio__item {
  &--title {
    font-size: 18px;

    @media (min-width: 992px) {
      font-size: 24px;
    }
  }
  &--desc {
    height: 60px;
  }
}
.portfolio-inner {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column-reverse;
  padding-top: 30px;
  @media (min-width: 992px) {
    padding: 0;
    flex-wrap: wrap;
    flex-direction: row;
  }
}
.portfolio-desc {
  width: 100%;
  margin-top: 30px;
  @media (min-width: 992px) {
    margin-top: 0;
    width: 50%;
  }
}
.image-container {
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
}
.carousel-img {
  max-height: calc(100vh - 200px - 4em);
  max-width: 100%;
  width: auto;
}
.VueCarousel-dot-container {
  margin-top: 0!important;
}
@keyframes barabanOut{
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
@keyframes barabanIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
