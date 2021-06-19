<template>
  <div v-animation 
        :data-delay="delay" 
        :data-a="typeAnim"
        :preloader="preloader"
        :data-duration="duration">
    {{ content }}
    <slot/>
  </div>
</template>

<script>
export default{
  name: 'AnimItem',
  props: {
    typeAnim: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: false
    },
    content: {
      type: String,
      required: false  
    },
    delay: {
      type: Number,
      required: false
    },
    preloader: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      // currentSection: 2
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
</style>
