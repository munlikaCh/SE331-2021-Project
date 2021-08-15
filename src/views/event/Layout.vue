<template>
  <!-- <div v-if="event"> -->
  <div v-if="GStore.event">
    
    <div id="nav" class="menub">
      <router-link :to="{ name: 'EventDetails' }">꒰ Profile ꒱</router-link>
      ┊
      <router-link :to="{ name: 'EventRegister' }">꒰ Hometown ꒱</router-link>
      ┊
      <router-link :to="{ name: 'EventEdit' }">꒰ Status ꒱</router-link>
      ┊
      <router-link :to="{ name: 'DocComm' }">꒰ Doctor's comment ꒱</router-link>
      <h1>❝ {{ GStore.event.name }}{{ GStore.event.surname }} ❞</h1>
    <router-view :event="GStore.event" />
    </div>
    
  </div>
</template>
<script>
// import EventService from '@/services/EventService.js'

export default {
  inject:['GStore']
}
</script>
<style>
.menub{
  font-size: 18px;
}
#nav{
  text-align: -webkit-center;
}
</style>
