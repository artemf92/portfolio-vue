<template>
  <div>
    <section>
      <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-xl-3 col-sm-12">
          <h2>404</h2>
        </div>
        <div class="col-xl-9 col-sm-12">
          <h3>УПС! Ничего не найдено!</h3>
        </div>
        <div class="col-12">
          <p>К сожалению, данной страницы не существует. :(</p>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  components: {
  },
  beforeCreate() {
    this.$store.state.isHome = true;
  }
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 7em;
}
h3 {
  font-size: 4em;
}
</style>
