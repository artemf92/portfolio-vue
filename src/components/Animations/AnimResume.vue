<template>
  <div v-animation :data-a="typeAnim">
    <h3>{{ title }}</h3>
    <div v-for="(element, index) in data" :key="index">
      <span class="time">{{ element.start }} - {{ element.finish || 'по настоящее время'}}</span>
      <p class="resume__org">{{ element.org }}, {{ element.content }}</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'AnimResume',
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true,
    },
    typeAnim: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      // currentSection: 3
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
.resume {
  &__org {
    color: #808080;
  }
}
</style>
