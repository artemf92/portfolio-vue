<template>
  <div class="modal" @click.self="closeModal" :class="{'is-open' : show}">
    <div class="modal__container" :class="[show ? 'modal-open animate-open' : '', animation ? animation : '']">
      <button class="modal-close btn-reset" @click="closeModal">&#10006;</button>
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data: function () {
    return {
      show: false,
      animation: 'fade',
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  &-close {
    border-radius: 50%;
    color: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 1000;
    transition: opacity .3s ease-in-out;
    &:hover {
      opacity: .7;
      transition: opacity .3s ease-in-out;
    }
      }
}
//.modal {
//  background: #fff;
//  border-radius: 8px;
//  padding: 15px;
//  min-width: 420px;
//  max-width: 480px;
//  position: absolute;
//  top: 50%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//
//  &-close {
//    border-radius: 50%;
//    color: #fff;
//    background: #2a4cc7;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    position: absolute;
//    top: 7px;
//    right: 7px;
//    width: 30px;
//    height: 30px;
//    cursor: pointer;
//  }
//
//  &-title {
//    color: #0971c7;
//  }
//
//  &-content {
//    margin-bottom: 20px
//  }
//
//  &-footer {
//    &__button {
//      background-color: #0971c7;
//      color: #fff;
//      border: none;
//      text-align: center;
//      padding: 8px;
//      font-size: 17px;
//      font-weight: 500;
//      border-radius: 8px;
//      min-width: 150px;
//    }
//  }
//}
//
//.modal-shadow {
//  position: absolute;
//  top: 0;
//  left: 0;
//  min-height: 100%;
//  width: 100%;
//  background: rgba(0, 0, 0, 0.39);
//}
</style>
