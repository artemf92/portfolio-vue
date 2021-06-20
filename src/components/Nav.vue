<template>
  <div>
    <div id="nav" :class="animation">
      <div class="nav-wrapper">
        <button
          class="home-link link"
          @click="$router.push({ name: 'Home'})"
          :class="openHamburger()"
          v-if="this.$store.state.isHome"
          >Home</button>
        <div class="hamburger-menu">
          <button class="hamburger hamburger--spin" type="button"
            @click="activeHamburger = !activeHamburger, showMenu = !showMenu, showLink = !showLink; toggleMenu()"
            :class="openHamburger()"
            >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <Menu :class="openHamburger()"/>
  </div>


</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: 'Nav',
  components: {
    Menu
  },
  props: {
    animation: {
      type: String,
      required: false
    }
  },
  data(){
    return{
      activeHamburger: false,
      showMenu: false,
      hideMenu: false,
      animActive: {},
      colorNav: {
        color: 'white',
      },
      showLink: false,
      transformNav: {
        transform: ''
      },
      data: {
        height: 0,
        width: 0,
        scrollFactor: 0
      },
      home: null,
    }
  },
  methods: {
    toggleMenu() {
      const menu = document.querySelector('.menu')
      console.log(menu.classList.contains('is-active'))
      this.hideMenu = menu.classList.contains('is-active');
    },
    openHamburger() {
      return {
        'is-active': this.activeHamburger,
        'is-hide'  : this.hideMenu,
        '_showMenu': this.showMenu,
        '_showLink': this.showLink,
      }
    },

  },
  beforeMount() {
      this.home = location.pathname !== '/' ? true : false;
  },
  mounted() {
  }
}
</script>

<style lang="scss">
#nav {
  //width: calc(100% - 100px);
  width: 100%;
  // position: absolute;
  position: fixed;
  top: 15px;
  right: 0;
  color: white;
  height: auto;
  //transform: translateY(100%);
  opacity: 0;
  animation: fadeNav 1s ease forwards;
  animation-delay: 3.9s;
  z-index: 99;
  mix-blend-mode: exclusion;
  color: black;
  @media (min-width: 992px) {
   padding: 0 50px;
   left: 0;
  }
  & h2 {
    color: white;
    background-color: transparent;
  }
  @keyframes fadeNav {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .nav-wrapper {
    display: flex;
    // justify-content: space-between;
    justify-content: flex-end;
    transition: .3s ease-in;
  }
  a {
    font-weight: bold;
    // color: #fd0202;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
#nav._active > .nav-wrapper {
  transform: translateY(-120%)
}
#nav._active:hover > .nav-wrapper {
  transform: translateY(0)
}
#nav._blackNav .nav-wrapper .logo h2,
#nav._blackNav .nav-wrapper .hamburger-menu .link {
  color: black!important;
}
#nav.absolute {
  position: absolute;
}
.link {
  padding: 15px;
  transition: .2s ease;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
}
.link._showLink {
  opacity: 0;
}
.logo {
  h2 {
    transition: color .2s ease-in-out;
  }
  span {
    color: #fd0202;
  }
}
.hamburger-menu {
  display: flex;
  a {
    color: white;
  }
}

button {
  color: #fff;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-thumb {
  background-color: red;
  // outline: 1px solid slategrey;
}


.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  }
  .hamburger:hover {
    opacity: 0.7;
    .hamburger-inner:before {
      top: -14px;
    }
    .hamburger-inner:after {
      bottom: -14px;
    }
  }
  .hamburger.is-active:hover {
    opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #fff; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    // background-color: #fd0202;
    background-color: white;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }
    .hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }
</style>
