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
.event-card {
  border-radius: 15px;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #615899bd;
  margin-bottom: 18px;
  background-color: #9a91dbbd;
  color: white;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #7166b6a1;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
