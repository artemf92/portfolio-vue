<template>
  <div id="hcard" class="vcard">
    <span class="fn n">
        <span class="given-name"></span>
      <span class="additional-name">Artem</span>
      <span class="family-name">Frolov</span>
    </span>
    <div class="org">IP Frolov Artem Mikhailovich</div>
    <a class="email" href="mailto:fa92@live.ru">fa92@live.ru</a>
    <div class="adr">
      <div class="street-address">Teatralnaya str,</div>
      <span class="locality">Kaliningrad</span>
    , 
      <span class="postal-code">236006</span>
      <span class="country-name">Russia</span>
    </div>
  </div>
</template>

<script>
export default{
  name:'HCard',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style lang="scss">
#hcard {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
}
</style>
