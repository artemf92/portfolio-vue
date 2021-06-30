<template>
  <div class="home">
    <Preloader/>
    <SectionAbout/>
<!--    <SectionResume/>-->
    <section >
      <SectionPortfolio :typeAnim="'_slideToLeft'"
                      class="portfolio h-100" />
    </section>
    <SectionContacts>
      <AnimItem
          class="msg-btn"
          :type-anim="'_textToTop'"
          :data-delay="15">
        <!-- <router-link to="/contacts" class="link btn-say">Say Hello
        </router-link> -->
        <button class="link btn-reset btn-say" @click="$router.push({ name: 'Contacts' })">Say Hello</button>
      </AnimItem>
    </SectionContacts>
    <slot/>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import Preloader from '@/components/Preloader.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionResume from '@/components/SectionResume.vue';
import SectionPortfolio from '@/components/SectionPortfolio.vue';
import SectionContacts from '@/components/SectionContacts.vue';

import AnimItem from '@/components/Animations/AnimItem.vue';

export default {
  name: 'Home',
  data() {
    return {
      resource: null,
    }
  },
  components: {
    SectionHero,
    Preloader,
    SectionAbout,
    SectionResume,
    SectionPortfolio,
    SectionContacts,
    AnimItem,
  },
  beforeCreate() {
    this.$store.state.isHome = false;
  },
  methods: {
  }
}
</script>

<style lang="scss">
.pagetitle {
  height: 0px;
  font-size: 1px;
  color: transparent;
  position: absolute;
}
.home {
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
