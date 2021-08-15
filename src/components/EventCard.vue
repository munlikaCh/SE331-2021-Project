<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <!-- <span>@{{ event.time }} on {{ event.date }}</span> -->
      <h4>{{ event.name }}{{ event.surname }}</h4>
      <p>{{ event.status }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

.event-card {
  border-radius: 8px;
  border: 1px solid #5f6368;
  overflow: hidden;
  -webkit-transition: all 0.18s ease;
  transition: all 0.18s ease;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  text-decoration: none;
  outline: 0;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  position: relative;
  background-color: #202124;
  color: #e8eaed;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: normal;
  margin-bottom: 12px;
  min-width: 280px;
  /* border-radius: 15px;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #615899bd;
  margin-bottom: 18px;
  background-color: #9a91dbbd;
  color: white; */
}

.event-card:hover {
  background-color: #2F3034;
  transform: scale(1.01);
  /* box-shadow: 0 3px 12px 0 #7166b6a1; */
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
