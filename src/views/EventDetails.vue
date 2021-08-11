<template>
  <div v-if="event">
    <h1>{{ event.name }}{{ event.surname }}</h1>
    <!-- <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p> -->
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
