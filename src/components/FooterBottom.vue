<template>
  <div>
    <AnimItem 
      class="footer-bottom"
      :type-anim="'_fadeIn'"
      :data-delay="3"
      :data-duration="0.4"
      :class="animation"
      >
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div class="col-sm-6 col-md-4 col-xl-2"> Artem Frolov © {{ getYear === 2020 ? getYear : '2020 - ' + getYear }}</div>
            <div class="col-sm-6 col-md-4 col-xl-2"> 
              <a class="mailto" href="mailto:fa92@live.ru">
                <icon-mail 
                  class="social-icon mail"
                  :size="iconSize"/>
                  fa92@live.ru</a>
            </div>
            <div class="col-md-4 col-xl-8">
              <div class="social-inner">
                <a href="https://www.instagram.com/artemf92/">
                  <icon-in
                  class="social-icon in"
                  :size="iconSize"/>
                </a>
                <a href="https://t.me/artemf92">
                  <icon-tg 
                  class="social-icon tg"
                  :size="iconSize"/>
                </a>
                <a href="https://vk.com/id7001520">
                  <icon-vk 
                  class="social-icon vk"
                  :size="iconSize"/>
                </a>
                <a href="https://www.facebook.com/information.sec0">
                  <icon-fb 
                  class="social-icon fb"
                  :size="iconSize"/>
                </a>
              </div>
            </div>
          </div>
        </div>
    </AnimItem>
  </div>
</template>

<script>
import AnimItem from './Animations/AnimItem.vue';
import iconIn from './Icons/inst.vue';
import iconTg from './Icons/tg.vue';
import iconFb from './Icons/fb.vue';
import iconVk from './Icons/vk.vue';
import iconMail from './Icons/mail.vue';

export default{
  name: 'FooterBottom',
  components: {
    AnimItem,
    iconIn,
    iconTg,
    iconFb,
    iconVk,
    iconMail,
  },
  props: {
    animation: {
      type: String,
      required: false
    }
  },
  data(){
    return{
      iconSize: '20px',
    }
  },
  computed: {
    getYear() {
      return new Date().getFullYear();
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
.footer-bottom {
  z-index: 100;
}
</style>
