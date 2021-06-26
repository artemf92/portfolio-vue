<template>
    <img v-lazyload class="image__item"
        :data-url="source"
        alt=""
        :style="coverTransform"
        @click="showModal">
</template>

<script>

export default{
  name: 'ImageItem',
  props: {
    source: {
      type: String,
      required: true
    },
    coverTransform: {
      type: Object,
      required: false
    },
  },
  methods: {
    showModal() {
      console.log('CLICK')
      this.$emit('showModal', {show: true,animation: 'fadeInUp', src: this.source})
    }
  }
}
</script>

<style lang="scss">
figure {
  margin: 0;
}
.image {
  transition: .3s ease-out;
  &__item.loaded {
    top: 0;
    visibility: visible;
    opacity: 1;
    border: 0;
  }

  &__item {
    width: 100%;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
  }
}
</style>

