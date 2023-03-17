<template>
  <div class="homePageContainer">
    <!-- <div>
    <h1>Welcome to Student Registry!</h1>
  </div> -->
  <div>
    <img id="homePic" src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHN0dWRlbnRzJTIwaW4lMjBjbGFzc3Jvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />

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
