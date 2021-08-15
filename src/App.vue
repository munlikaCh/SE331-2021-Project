<template>

  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div id="nav">
     <router-link :to="{ name: 'Start' }"></router-link>
    <router-link :to="{ name: 'EventList' }">‎ꔛ Home</router-link>┊
    <router-link :to="{ name: 'About' }">About us ‎ꔛ</router-link>
    
  </div>

  <!-- new element -->
  <router-view />
  
</template>

<script>
export default {
  inject: ['GStore']
}
</script>


<style>
@keyframes yellowfade{
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
#flashMessage{
  animation-name: yellowfade;
  animation-duration: 5s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-size: full;
  text-shadow: black 0.1em 0.1em 0.2em;
}
html,
body{
  background-color: #202124;
}
h1{
  color: whitesmoke;
  font-family: auto;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #9382e2;
}
h4 {
  font-size: 20px;
}
</style>
