<template>
  <h1>WELCOME TO ||| WEBSITE</h1>
  <div class="Start">
    
       <div class="img">
       <img src="https://i2.fpic.cc/file/img-b1/2021/08/14/IMG_2729.md.png" alt="IMG_2729.png" border="0" />
      </div>

        <button @click="GoHome"> Click to go to home page </button>
        <!-- <router-link :to="{ name: 'EventList' }">Home</router-link> -->
  </div>
</template>

<script>

export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    GoHome(){
      this.$router.push({
        name: 'EventList'
      })
    },
  }
}

</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
