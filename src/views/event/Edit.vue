<template>
  <!-- <h3>{{ event.name }}{{ event.surname }}</h3> -->
  <h4>Status:  {{ event.status }} </h4>
  <b>Vaccines</b><br>  
    First dose : {{ event.type }} <br>
    Second dose : {{ event.type2 }} <br>

  <!-- <button @click="edit"> Edit </button> -->
  <br>
  <button @click="Dcomment"> Doctor's comment </button>

</template>
<script>

export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    Dcomment(){
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
      this.GStore.flashMessage2 = 'The details in ' + this.event.name + ' already edited.'
      setTimeout(() => {
        this.GStore.flashMessage2 = ''}
      ,3000)
    }
  }
}
</script>