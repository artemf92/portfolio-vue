<template>
  <section class="resume">
    <div class="container h-100">
      <AnimItem
        :typeAnim="'_textToTop'">
        <h2 class="section__title resume__title text-left">Резюме</h2>
      </AnimItem>
      <div class="row h-100 align-items-center">
        <div class="col-sm-6 col-md-4 col-xl-3">
          <AnimItem
            class="resume__photo"
            :typeAnim="'_fadeIn'"
            :duration="1.4"
            :delay='10'>
            <ImageItem
              :source="photoSrc"/>
          </AnimItem>
        </div>
        <div class="col-sm-6 col-md-8 col-sl-9">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <AnimResume :typeAnim="'_textToTop'" :title="'Опыт работы'" :data="$store.state.dataJson.works" />
            </div>
            <div class="col-sm-12 col-md-6">
              <AnimResume
              :typeAnim="'_textToTop'"
              :title="'Образование'"
              :data="$store.state.dataJson.learns"
              :delay="50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimItem from './Animations/AnimItem.vue'
import AnimResume from './Animations/AnimResume.vue'
import ImageItem from './ImageItem'

export default {
  name: 'sectionResume',
  components: {
    AnimItem,
    AnimResume,
    ImageItem
    },
  data(){
    return{
      works: [],
      learns: [],
      photoSrc: './images/af-photo.jpg',
      resWorks: null,
      resLearns: null
    }
  },
}
</script>

<style lang="scss">
.section-resume {
  // height: ;
  padding: 8em 0;

  @media (min-width: 992px) {
    height: calc(100vh - 30px);
  }
}
.story, .learn {
  width: 310px;
  text-align: center;
}
.resume {
  &__photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #000;
    margin: 10px auto 30px;
    img {
      border-radius: 50%;
    }
    @media (min-width: 992px) {
      margin: 0;
    }
  }
}

</style>
