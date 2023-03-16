<template>
  <div class="homePageContainer">
    <div>
    <h1>Welcome to Student Registry!</h1>
  </div>
  <div>
    <img id="homePic" src="https://www.d120.org/assets/1/18/registration.jpg?5468" alt="" />

  </div>
  </div>
</template>


<script>





export default {
    name: 'HomePage',
    components:{},
    data: () => ({
      
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
