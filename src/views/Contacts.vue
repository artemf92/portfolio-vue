<template>
  <div>
    <SectionContacts
      
      class="page_contacts"
      data-page
    >
      <AnimItem 
        :typeAnim="'_fadeIn'"
        :data-delay='25'
        >
        <Form />
      </AnimItem>
    </SectionContacts>
    <slot/>
  </div>
</template>

<script>
import SectionContacts from '../components/SectionContacts'
import Form from '../components/Form'
import AnimItem from '../components/Animations/AnimItem'

export default {
  name:'Contacts',
  components: {
    SectionContacts,
    AnimItem,
    Form,
  },
  methods:{
  },
  beforeCreate() {
    this.$store.state.isHome = true;
  }
}
</script>

<style lang="scss">
section[data-page] {
  animation: bgFadeIn 1s ease-in-out forwards;
  .footer-wrapper {
    animation: footerWrapper 1.3s ease-in-out forwards;
    .hr {
      animation: scrollOut 1.5s ease-in-out 1s forwards;
    }
    .footer__top {
      opacity: 1;
      animation: footerTopSlide .3s ease-in-out forwards;
    }
  }
  .section__title {
    transition: color 3s ease-in-out;
    opacity: 1;
    animation: changeColorTitle 1s ease-in-out forwards;
  }
  
  .footer-bottom {
    opacity: 1;
    animation: changeBgFooter 1s ease-in-out forwards;
    color: white;
    .social-icon svg,
    .mailto {
      fill: white;
      color: white;
    }
    .social-icon:hover svg,
    .mailto:hover {
      fill:#232323;
      color: #232323;
      text-decoration: none;
      transition: .3s ease-in-out;
    }
  }
}
.page_contacts {
    height: 100vh;
    padding-top: 80px;

    @media (min-width: 992px) {
      padding-top: 50px;
      height: calc(100vh - 30px);
    }
  }
</style>
