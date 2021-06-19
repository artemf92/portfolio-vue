<template>
  <div>
    <h2 class="section__title">{{ title }}</h2>
  </div>
</template>

<script>
export default{
  name: 'AnimTitleLeft',
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
</style>
