<template>
  <div class="menu">
    <div class="menu__bg"></div>
    <div class="menu__wrapper">
<!--       <button class="link menu__link" @click="$router.push({ name: 'Resume' })"><span>Резюме</span></button>-->
       <button class="link menu__link" @click="$router.push({ name: 'Portfolio' })"><span>Портфолио</span></button>
       <button class="link menu__link" @click="$router.push({ name: 'Contacts' })"><span>Контакты</span></button>
      <a href="https://www.instagram.com/artemf92/" class="menu__icon-social">
        <icon-in
        class="menu__icon in"
        :size="iconSize"/>
      </a>
      <a href="https://vk.com/id7001520" class="menu__icon-social">
        <icon-vk
        class="menu__icon vk"
        :size="iconSize"/>
      </a>
      <a href="https://www.facebook.com/information.sec0" class="menu__icon-social">
        <icon-fb
        class="menu__icon fb"
        :size="iconSize"/>
      </a>
      <a href="https://t.me/artemf92" class="menu__icon-social">
        <icon-tg
        class="menu__icon tg"
        :size="iconSize"/>
      </a>
    </div>
  </div>
</template>

<script>
import iconIn from './Icons/inst.vue';
import iconTg from './Icons/tg.vue';
import iconFb from './Icons/fb.vue';
import iconVk from './Icons/vk.vue';

export default{
  name:'Menu',
  components: {
    iconIn,
    iconTg,
    iconFb,
    iconVk,
  },
  data(){
    return{
      iconSize: '25px'
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
@use "sass:math";
.menu {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  font-weight: 200;
  color: white;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  padding: 50px 10px;
  opacity: 1;
  transition: all 0.8s cubic-bezier(1,.42,.43,1);
  z-index: 10;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -khtml-border-radius: 50%;
  @media (min-width: 768px) {
    width: 30%;
  }
  &__link {
    font-weight: bold;
    font-size: 1.6em;
    background-color: transparent;
    outline: none;
    color: #fff;
    border: none;
    padding: 0.4em;
    transition: 1s ease-in;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    span {
      display: inline-block;
      transition: transform .4s ease-in-out;
      transform: translateY(150%);
      &:before {
        display: inline-block;
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: currentColor;
        transition: width .4s ease-in-out;
      }
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
  &__wrapper {
    z-index: 100;
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__bg {
    background-color: rgba(0, 0, 0, .7);
    //-webkit-backdrop-filter: blur(10px);
    //backdrop-filter: blur(10px);
    width: 1px;
    height: 1px;
    position: absolute;
    top: 0;
    right: 35px;
    transition: 1s ease-in-out;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -khtml-border-radius: 50%;
  }
  &__icon {
    overflow: hidden;
  }
  &__icon svg {
    fill: white;
    display: block;
    margin: 0 auto;
    transition: transform .5s ease-in-out;
    transform: translateY(150%);

  }
  &__icon-social {
    display: inline-flex;
    margin: 0 auto 20px;
    position: relative;
    &:first-child {
      margin-top: 15px;
    }
    &:before {
      display: inline-block;
      position: absolute;
      bottom: -5px;
      left: -1px;
      width: 0;
      content: '';
      height: 2px;
      background-color: currentColor;
      transition: width .4s ease-in-out;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  &.is-active {
    display: flex;
    .menu__bg {
      //transition: transform 1s ease-in-out;
      //transform: scale(5000);
      animation: showMenuBg 1.1s ease-in-out forwards;
    }

    @for $i from 1 through 3 {
      .menu__link:nth-child(#{$i}) span {
        transition: transform .3s ease-in-out;
        animation: showLink .3s ease-in-out #{$i * math.div(3, 10)}s forwards;
      }
      .menu__icon-social:nth-of-type(#{$i}) svg {
        transition: transform .3s ease-in-out;
        animation: showLink .3s ease-in-out #{1 + math.div($i, 10)}s forwards;
      }
    }
  }
  &.is-hide {
    display: flex;
    animation: hideMenu 1s ease 1.1s forwards;
    .menu__bg {
      animation: hideMenuBg 1s ease-in-out forwards;
    }
    @for $i from 1 through 3 {
      .menu__link:nth-child(#{$i}) span {
        transform: translateY(0);
        animation: hideLink .5s ease-in-out #{math.div($i, 10)}s forwards;
      }
      .menu__icon-social:nth-of-type(#{$i}) svg {
        transform: translateY(0);
        animation: hideLink .5s ease-in-out #{0.3 + math.div($i, 10)}s forwards;
      }
    }
  }
}
.social {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-icons {
    width: 50px;
    height: 50px;
    background-color: #686868;
    margin-bottom: 10px;
  }
}

@keyframes showLink {
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes showMenuBg {
  1% {
    transform: scale(0);
  }
  100% {
    transform: scale(5000);
  }
}
@keyframes hideMenuBg {
  0% {
    transform: scale(5000);
  }
  50% {
    transform: scale(5000);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes hideMenu {
  99% {
    visibility: visible;
  }
  100% {
    position: absolute;
    top: -100%;
    right: 0;
    visibility: hidden;
  }
}
@keyframes hideLink {
  99% {
    opacity: 0;
  }
  100% {
    transform: translateY(150%);
  }
}
</style>
