<template>
  <div class="homePageContainer">
  <div>
    <img id="homePic" :src="image" alt="" />
    <h1 class="homeText">Welcome to the student registry!</h1>
  </div>
  <div class="homeButtonContainer">
    <button class="homeButton" @click="this.$router.push('/students')">Students</button>
    <button class="homeButton" @click="this.$router.push('/courses')">Courses</button>
  </div>
  </div>
</template>

<script>
import homeImage from "../images/lecture.jpg"
export default {
    name: 'HomePage',
    components:{},
    data: () => ({
      image: homeImage
    }),
    mounted() {},
    methods: {
      getSearchResults(e) {
        e.preventDefault()
        const res = 
        this.searchResults= res.data.results
        this.searched = true
        this.searchQuery = ''
    },
    handleChange(event) {
        this[event.target.name] = event.target.value
        console.log(event)
      },
  }
  }
</script>
