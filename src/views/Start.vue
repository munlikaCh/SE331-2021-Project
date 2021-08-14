<template>
  <h1>WELCOME TO  &nbsp; | | | &nbsp;  WEBSITE</h1>
  <div class="Start">
       <div class="img">
       <img src="https://i2.fpic.cc/file/img-b1/2021/08/14/IMG_2729.md.png" alt="IMG_2729.png" border="0" />
      </div>

        <button class="btstart" @click="GoHome"> Click to go to home page </button>
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
<style>
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
.btstart{
    padding: 10px;
    border: none;
    background: #8dbfeb;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    font-size: inherit;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 20%);
}
.btstart:hover{
    background: #5a92c2;
}
#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
