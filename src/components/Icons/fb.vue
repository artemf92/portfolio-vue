<template>
  <figure>
      <svg 
        :width="size" :height="size"
        enable-background="new 0 0 159.822 159.822" viewBox="0 0 159.822 159.822" xmlns="http://www.w3.org/2000/svg"><path d="m76.715 36.172c4.142 0 7.5-3.358 7.5-7.5 0-7.539 6.134-13.672 13.672-13.672h21.179c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.179c-15.81 0-28.672 12.862-28.672 28.672 0 4.141 3.358 7.5 7.5 7.5z"/><path d="m117.458 59.627h-76.702c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h28.46v77.695c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-77.695h33.243c4.142 0 7.5-3.358 7.5-7.5s-3.359-7.5-7.501-7.5z"/>
      </svg>
  </figure>
</template>

<script>
export default{
  name:'iconFb',
  props: {
    size: {
      type: String,
      requred: true
    }
  },
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style lang="scss">
</style>
