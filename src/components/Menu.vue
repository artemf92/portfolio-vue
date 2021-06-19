<template>
  <div class="menu">
      <div class="menu-wrapper">
         <button class="link menu-link" @click="$router.push({ name: 'Resume' })">Резюме</button> 
         <button class="link menu-link" @click="$router.push({ name: 'Portfolio' })">Портфолио</button> 
         <button class="link menu-link" @click="$router.push({ name: 'Contacts' })">Контакты</button> 
        <hr/>
        <a href="https://www.instagram.com/artemf92/" class="social-menu-icon">
          <icon-in
          class="menu-icon in"
          :size="iconSize"/>
        </a>
        <a href="https://vk.com/id7001520" class="social-menu-icon">
          <icon-vk
          class="menu-icon vk"
          :size="iconSize"/>
        </a>
        <a href="https://www.facebook.com/information.sec0" class="social-menu-icon">
          <icon-fb
          class="menu-icon fb"
          :size="iconSize"/>
        </a>
        <a href="https://t.me/artemf92" class="social-menu-icon">
          <icon-tg
          class="menu-icon tg"
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
.menu {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  font-weight: 200;
  background-color: rgba(0, 0, 0, .8);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  //padding: 15% 20%;
  padding: 50px 10px;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1,.42,.43,1);
  z-index: 10;
  @media (min-width: 768px) {
    width: 30%;
    background-color: rgba(0, 0, 0, .7);
  }
  &-link {
    font-weight: bold;
    font-size: 1.6em;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0.4em;
    transition: 1s ease-in;
    cursor: pointer;
    &:hover {
      color: #a19f9f;
      transition: .2s ease-in;
      text-decoration: none;
    }
  }
  &-wrapper {
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
}
.menu._showMenu {
    transform: translateY(0);
    opacity: 1;
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
.menu-icon svg {
  fill: white;
  transition: .3s ease;
}
.menu-icon:hover svg {
  fill: #686868;
}
.social-menu-icon {
  // align-self: flex-end;
  margin-bottom: 10px;
}
</style>
