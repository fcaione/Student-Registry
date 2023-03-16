<template>
  <div>
    <h1>Home Page!</h1>
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
