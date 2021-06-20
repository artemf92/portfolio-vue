<template>
  <div>
    <Nav/>
    <router-view>
      <FooterBottom/>
    </router-view>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import FooterBottom from '../components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Nav,
    FooterBottom
  },
}
</script>

<style lang="scss">
</style>
