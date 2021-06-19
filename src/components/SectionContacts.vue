<template>
  <section class="footer">
    <AnimItem 
      :type-anim="'_textToTop'"
      :content="'Контакты'"
      :delay="3"
      class="section__title text-left"/>
        <div class="footer-wrapper">
          <AnimItem 
            :type-anim="'_slideToRight'"
            :class="animation"
            :data-delay="10"
            :data-duration="3">
          <hr class="hr"/>
        </AnimItem>
        <AnimItem 
          class="footer__top"
          :type-anim="'_textToTop'"
          :data-delay="14"
          :data-duration="1.4">
          <h2>Связаться со мной</h2>
        </AnimItem>
        <AnimItem 
            :type-anim="'_slideToRight'"
            :class="animation"
            :data-delay="12"
            :data-duration="2.5">
          <hr class="hr"/>
        </AnimItem>
        <slot/>
      </div>
    <HCard/>
  </section>
</template>

<script>
import AnimItem from './Animations/AnimItem.vue';
import HCard from './HCard'

export default {
  name: 'SectionContacts',
  components: {
    AnimItem,
    HCard,
  },
  props: {
    animation: {
      type: String,
      required: false
    },
  },
  data(){
    return{
    }
  },
  computed: {
  },
  methods:{
    
    
  }
}
</script>

<style lang="scss">
.footer {
  padding: 10px 0;
  @media (min-width: 992px) {
    padding: 80px 0;
  }
  .section__title {
    padding: 0 50px;
  }
  h2 {
    font-size: 2em;
    font-weight: 200;
    @media (min-width: 992px) {
      font-size: 4em;
    }
  }
  &-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
.footer-wrapper {
  margin: 15vh 0;
}
.footer__top {
  width: 100%;
  height: 20vh;
  background-color: #f3f3f3;
  margin: -10px 0 -30px;
  z-index: -1;
  padding: 40px 0;
}
.msg-btn {
  width: 100%;
  max-width: 200px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px auto;
  color: black;
  border: 1px solid rgba(0,0,0,.4);
  transition: .3s ease-in-out;

  @media (min-width: 991px) {
    max-width: 300px;
    height: 80px;
    margin: 55px auto;
  }
  cursor: pointer;
  .link {
    color: black;
    text-transform: uppercase;
  }
}
.msg-btn:hover {
  max-width: 320px;
  height: 90px;
  transition: .4s ease-in-out;
  margin-top: 45px;
  .link {
    font-size: 18px;
    animation: scale .7s ease forwards;
    text-decoration: none;
  }
}
@keyframes scale {
  25% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.hr {
  border-top-color: rgba(0,0,0,.3);
}
.footer-bottom {
  width: 100%;
  height: 30px;
  background-color: #2c2c2c;
  // position: absolute;
  color: #808080;
  // bottom: 0;
  // left: 0;
  @media (min-width: 992px) {
    // height: 30px;
  }
}
.social-icon {
  width: 20px;
  display: inline-block;
  margin-right: 10px;
  svg {
    fill: #808080;
  }
}
.social-icon:hover svg {
  fill: white;
}
.mailto {
  color: #808080;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  .social-icon {
    margin-right: 2px;
  }
}
.social-inner {
  width: 120px;
  margin-left: auto;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
</style>
