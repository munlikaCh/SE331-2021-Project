<template>
  <!-- <h3>{{ event.name }}{{ event.surname }}</h3> -->
  <h4>Status:  {{ event.status }} </h4>
  <b>Vaccines</b><br>  
    First dose : {{ event.type }} <br>
    Second dose : {{ event.type2 }} <br>

  <!-- <button @click="edit"> Edit </button> -->
  <br>
  <!--<button @click="Dcomment"> Doctor's comment </button> -->

  <div>
  <form class = "review-form" @submit.prevent ="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id ="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating" >
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
     
        <label for="isRecommend">Would you recommend this product?:</label>
        <select id="isRecommend" v-model.number="isRecommend" >
            <option>recommend</option>
            <option>not recommend</option>
        </select>

        <input class="button" type="submit" value="Submit">
        </form>
  </div>
</template>
<script>

export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    Dcomment(){
      this.$router.push({
        name: 'DocComm',
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