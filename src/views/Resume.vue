<template>
  <div>
    <SectionResume class="page_resume"/>
    <slot/>
  </div>
</template>

<script>
import SectionResume from '../components/SectionResume'

export default {
  name:'Resume',
  components: {
    SectionResume,
  },
  beforeCreate() {
    this.$store.state.isHome = true;
  }
}
</script>

<style lang="scss">
.page_resume {
  background-color: #000;
  animation: resumeFadeIn 1s ease-in-out forwards;
  padding: 3rem 0;
  @media (min-width: 768px) {
    font-size: 13px;
    height: calc(100vh - 30px);
  }
  @media (min-width: 992px) {
    padding: 80px 50px;
    font-size: 16px;
  }
}

@keyframes resumeFadeIn {
  to {
    background-color: #fff;
  }
}
</style>
