<template>
 <div id="flashMessage2" v-if="GStore.flashMessage2">
    {{ GStore.flashMessage2 }}
  </div>
  <form class = "review-form" @submit.prevent ="onSubmit">
        <h3>Doctor's Comment</h3>

        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <br>
        <br>
        <label for="review">Review:</label>
        <textarea id ="review" v-model="review"></textarea>
        <br>
        <br>

        <input @click="button" class="button" type="submit" value="Submit">
        </form>
  <!-- <button @click="register"> Register Me </button> -->
  <!-- =========== list ============== -->
      <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{review.name}}
            <br/>
                "{{review.review}}"
            <br/>
            </li>
        </ul>
      </div>

    <review-list v-if="reviews.length" :reviews ="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
    
</template>

<script>
export default {
  data() {
        return {
            name: '',
            review: '',
            reviews: []
        }
  },
  props: ['event'],
        reviews: {
            type: Array,
            required: true
        }
  ,
  inject: ['GStore'],
  methods: {
     onSubmit() {
            if (this.name === '' || this.review ==='' ) {
                alert('Review is incomplete . Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review
            }
            this.$emit('review-submitted', productReview)
            this.name = '',
                this.review = ''
        },
        addReview(review){
            this.reviews.push(review)
        }
    // onSubmit(){
    //   this.$router.push({
    //     name: 'EventDetails',
    //     params: { id: this.event.id }
    //   })
    //   this.GStore.flashMessage = 'you are successfully registered for ' + this.event.name
    //   setTimeout(() => {
    //     this.GStore.flashMessage = ''}
    //   ,3000)
    // }
  }
}
</script>
<style>
@keyframes redfade{
  from{
    background: rgb(84, 196, 80);
  }
  to{
    background: transparent;
  }
}
#flashMessage2{
  animation-name: redfade;
  animation-duration: 5s;
}
.sizef{
  font-size: 16px;
}
</style>