<template> 
<div class="sizef">
  <b>Name:</b>  {{ event.name }}{{ event.surname}} <br>
  <b>Age:</b>  {{ event.age }} <br>
</div>
  <!-- <img v-bind:src="'data:@/src/assets/piclogo.png'"> -->
  <div id="flashMessage2" v-if="GStore.flashMessage2">
    {{ GStore.flashMessage2 }}
  </div>
</template>

<script>


export default {
  props: ['event'],
  inject: ['GStore'],
}
</script>

<style>
@keyframes redfade{
  from{
    background: red;
  }
  to{
    background: transparent;
  }
}
#flashMessage2{
  animation-name: redfade;
  animation-duration: 5s;
}
.sizef{
  font-size: 16px;
}
</style>