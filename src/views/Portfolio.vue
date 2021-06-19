<template>
  <div>
    <section>
      <AnimItem
        :typeAnim="'_fadeIn'"
        class="page_portfolio"
        :delay="12">
        <SectionPortfolio :typeAnim="'_textToTop'"/>
      </AnimItem>
    </section>
    <slot/>
  </div>
</template>

<script>
import AnimItem from '../components/Animations/AnimItem.vue'
import SectionPortfolio from '../components/SectionPortfolio.vue'

export default {
  name: 'Portfolio',
  components: {
    SectionPortfolio,
    AnimItem,
  },
  beforeCreate() {
    this.$store.state.isHome = true;
  }
}
</script>

<style lang="scss">

</style>
