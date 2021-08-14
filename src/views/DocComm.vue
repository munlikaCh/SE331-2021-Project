<template>
 <div id="flashMessage2" v-if="GStore.flashMessage2">
    {{ GStore.flashMessage2 }}
  </div>
  <br>
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
      <!-- <div class="review-container"> -->
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{review.name}}
            <br/>
                "{{review.review}}"
            <br/>
            </li>
        </ul>
      <!-- </div> -->

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

input {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
}

label {
    font-size: 20px;
    margin-bottom: 5px;
}

li {
    font-size: 18px;
}

.nav-bar {
    display: flex ;
    background: linear-gradient(-90deg, #84cf6a, #16c0b0);
    height: 60px;
    margin-bottom: 25px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

.product-display {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.product-image,
.product-info {
    width: 50%;
}

.review-form {
    display: flex;
    flex-direction: column;
    width: 425px;
    padding: 20px;
    border: 2px solid #d8d8d8;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
  
    width: 425px;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
    border: 2px solid #d8d8d8;
}

.review-container li {
    margin-bottom: 30px;
}

.review-form .button {
    display: block;
    margin: 30px auto;
}
button {
  border: none;
  background: #7185ec;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: inherit;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #586cd8;
}

button:active {
  position: relative;
  top: 1px;
  left: 1px;
  box-shadow: none;
}
input.button{
  background: #7185ec;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: inherit;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
}
input.button:hover {
  background-color: #586cd8;
}

textarea {
    width: 95%;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
}

@media only screen and (max-width: 600px) {
    .container {
        flex-direction: column;
    }
    .review-form {
        width: 90%;
    }
}
</style>