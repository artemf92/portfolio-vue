<template>
  <section class="hero">
    <div class="hero__description">
<!--        <video class="video-wrap" loop="true" poster="" playsinline autoplay="autoplay" muted preload="auto">-->
<!--              <source src="../assets/media/video-hero2.mp4" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">-->
<!--        </video>-->
<!--        <div class="video-container"></div>-->
        <p class="a-fade a-fade-off">Верстка сайтов на HTML и CSS</p>
        <p class="a-fade a-fade-off">HTML5 CSS3 JavaScript Vue.js</p>
        <button class="red-btn">Подробнее</button>
    </div>
    <span class="mouse-down">
      <span class="mouse-wheel"></span>
    </span>
  </section>
</template>

<script>


export default {
  name: 'SectionHero',
  props: {
  },
  components: {
  }
}
</script>

<style lang="scss">
.hero {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100vh;
  padding: 50px 50px 110px;
  
}
.video-wrap {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  
}
.video-container {
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;
  display: block;
  background-color: #000;
  opacity: .6;
  position: absolute;
  top: 0;
  left: 0;
}

.hero__description {
  color:white;
  // margin-bottom: 60px;
  h2 {
    text-align: left;
  }
    p {
    font-size: 36px;
    line-height: 46px;
    // max-width: 400px;
    text-align: left;
    position: relative;
  }
}
.a-fade-off {
  transform: translateY(100%);
  opacity: 0;
}
.a-fade {
  animation: fadeText 1s ease forwards;
  animation-delay: 3.9s;
}
.red-btn {
    display: block;
    padding: 14px 34px;
    font-size: 16px;

    border: 2px solid #fd0202;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    background: transparent;
    transition: .2s ease-in-out;
    margin-top: 30px;
}
.red-btn:hover {
  background-color: #fd0202;
}
.mouse-down {
  position: absolute;
  bottom: 2%;
  left: 50%;
  width: 30px;
  height: 48px;
  border-radius: 15px;
  border: 2px solid #fff;
  transform: translate3d(-50%,0,0);
  z-index: 2;
}
.mouse-wheel {
  width: 4px;
  height: 9px;
  position: absolute;
  top: 8px;
  left: 11px;
  border-radius: 2px;
  animation: mouseWheel 1.25s infinite linear;
  background-color: #fff;
}

@keyframes mouseWheel {
  0% {
    -webkit-transform: scaleY(.4) translateY(0);
    transform: scaleY(.4) translateY(0);
  }
  20% {
      -webkit-transform: scaleY(1) translateY(0);
      transform: scaleY(1) translateY(0);
  }
  60% {
      -webkit-transform: scaleY(.4) translateY(12px);
      transform: scaleY(.4) translateY(12px);
  }
  100% {
      -webkit-transform: scaleY(.4) translateY(0);
      transform: scaleY(.4) translateY(0);
  }
}



</style>