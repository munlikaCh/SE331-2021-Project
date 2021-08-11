<template>
  <!-- <div v-if="event"> -->
  <div v-if="GStore.event">
    
    <div id="nav" class="menub">
      <router-link :to="{ name: 'EventDetails' }">Profile</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Hometown</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Status</router-link>
      <h1>{{ GStore.event.name }}{{ GStore.event.surname }}</h1>
    <router-view :event="GStore.event" />
    </div>
    
  </div>
</template>
<script>
// import EventService from '@/services/EventService.js'
export default {
  // props: ['id'],
  // data() {
  //   return {
  //     event: null
  //   }
  // },
  // created() {
  //   EventService.getEvent(this.id)
  //     .then((response) => {
  //       this.event = response.data
  //     })
  //     .catch((error) => {
  //       if (error.response && error.response.status == 404) {
  //         this.$router.push({
  //           name: '404Resource',
  //           params: { resource: 'event' }
  //         })
  //       } else {
  //         this.$router.push({ name: 'NetworkError' })
  //       }
  //     })
  // }
  inject:['GStore']
}
</script>
<style>
.menub{
  font-size: 18px;
}
</style>
