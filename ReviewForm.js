app.component('review-form', {
    template:
        // html
        `<form class = "review-form" @submit.prevent ="onSubmit">
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
        `
    ,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            isRecommend: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review ==='' || this.rating === null || this.isRecommend === null) {
                alert('Review is incomplete . Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                isRecommend: this.isRecommend,
            }
            this.$emit('review-submitted', productReview)
            this.name = '',
                this.review = '',
                this.rating = null,
                this.isRecommend = null
        }
    }
})