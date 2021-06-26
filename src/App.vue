<template>
  <div id="app">
    <h1 class="pagetitle">Верстка сайтов HTML5 CSS3 Vue.js</h1>
    <Nav/>
    <router-view>
      <Footer/>
    </router-view>
    <div class="cursor"  :class="{ click: cursorClick }" :style="{ top: cursorPositionY, left: cursorPositionX, opacity: cursorShow}"></div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer,
  },
  data: function() {
    return {
      resource: null,
      cursorX: 0,
      cursorY: 0,
      cursorShow: 0,
      cursorClick: false,
      cursorPositionX: null,
      cursorPositionY: null,
    }
  },
  methods: {
    cursorMove($event) {
      this.cursorShow = 1;
      this.cursorX = $event.clientX;
      this.cursorY = $event.clientY - 30;
      this.cursorPositionX = `${this.cursorX}px`;
      this.cursorPositionY = `${this.cursorY}px`;
    },
    cursorClickFn() {
      this.cursorClick = true;
      setTimeout(() => {
        this.cursorClick = false;
      }, 1000);
    }
  },
  mounted() {
  },
  created() {
    //this.resource = this.$resource('data.json')
    //this.resource.get().then(response => response.json()).then( res => this.$store.state.dataJson = res);
  }
}
</script>

<style lang="scss">

html {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling:touch;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  overflow-anchor: none;
  overflow-x: hidden;
  background-color: var(--color-white);
  scroll-behavior: smooth;
  -webkit-text-size-adjust: none;
  color: #282828;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: inherit;
}

.is-hidden {
  display: none !important; // stylelint-disable-line declaration-no-important
}

.btn-reset {
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.list-reset {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

button:focus {
  outline: none;
  border: none;
}
#app {
  font-family: Manrope, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 200;
  text-align: center;
  color: #5d5d5d;
  // overflow: hidden;
  width: 100%;

  background-color: #fff;
  @media (min-width: 992px) {
    overflow: hidden;
    height: 100vh;
  }
}
h2, h3 {
  // margin-top: 20px;
  color: #282828;
}
//.link:hover {
//  color: #686868;
//  transition: .3s ease-in;
//  text-decoration: none;
//}
section {
  position: relative;
  padding: 10px 15px;
  width: 100vw;
  //z-index: 1;
  background-color: #fff;
}
.page {
  height: calc(100vh - 30px);
}
.VueCarousel-dot {
  padding: 10px 5px!important;
  @media (min-width: 992px) {
    padding: 5px!important;
  }
}
@media (min-width: 992px) {
  section {
    //height: calc(100vh - 30px);
    //height: 100vh;
    padding: 80px 50px;
  }
}
section[data-page] {
  animation: bgFadeIn 1s ease-in-out forwards;
}
.section__title {
  font-size: 3em;
  margin: 0 0 40px;
  @media (min-width: 992px) {
    font-size: 4em;
  }
  @media (max-width: 992px) {
    margin: 0 0 20px;
  }
}
.no-anim {
  animation: none!important;
  opacity: 1!important;
  transform: translate(0, 0)!important;
}
[data-a=_fadeIn] {
  opacity: 0;
}
[data-a=_fadeIn]._active {
  animation: fadeIn 1s ease forwards;
}
[data-a=_textToTop] {
  transform: 'translateY(100%)';
  opacity: 0;
}
[data-a=_textToTop]._active {
  animation: fadeText 1s ease forwards;
}
[data-a=_photo] {
  opacity: 0;
}
[data-a=_photo]._active {
  animation: rotatePhoto 1s ease-in-out forwards;
}
[data-a=_slideToLeft] {
  transform: translateX(100%);
  opacity: 0;
}
[data-a=_slideToLeft]._active {
  animation: slideToLeft 1.4s ease-in-out forwards;
}
[data-a=_slideToRight] {
  transform: translateX(-100%);
  opacity: 0;
}
[data-a=_slideToRight]._active {
  animation: slideToRight 1.4s ease-in-out forwards;
}
.cursor {
  z-index: 999999;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  transform: translateX(-50%);
  transition: opacity .3s ease-in-out;
  &:before {
    width: 3px;
    height: 3px;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    transition: width .5s ease-in-out, height .5s ease-in-out;
  }
  &.click {
    &:before {
      animation: click 1s ease-in-out;
    }
  }
}
@keyframes click {
  30% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 3px;
    height: 3px;
  }
}
@keyframes slideToLeft {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
//Изменение бэграунда всей страницы Контакты
@keyframes bgFadeIn {
  0% {
    background-color: rgba(44, 44, 44, 0);
  }
  100% {
    background-color: rgba(44, 44, 44, 1);
  }
}
// Изменение фона и удаление "Связаться со мной"
@keyframes footerTopSlide {
  90% {
    background-color: #2c2c2c;
    color: white;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    position: absolute;
  }
}
// hr улетают
@keyframes scrollOut {
  100% {
    transform: translateX(-200%);
  }

}
// Сдвиг "Связаться со мной наверх"
@keyframes footerWrapper {
  0% {
    margin: 15vh 0;
  }
  90% {
    margin: 2vh 0;
  }
  95% {
    margin: 1.5vh 0;
  }
  99% {
    margin: 0.5vh 0;
  }
  100% {
    margin: 0;
  }
}
@keyframes rotatePhoto {
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}
@keyframes fadeText {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideToRight {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes changeColorTitle {
  50% {
    color: transparent;
  }
  100% {
    color: white;
  }

}
@keyframes changeBgFooter {
  100% {
    background-color: #6a6a6a;
  }
}
// .section__title._active {
//   animation: changeColorTitle 1s ease-in-out forwards;
// }

</style>
