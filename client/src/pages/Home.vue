<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input placeholder="Search Here" :value="searchQuery" name="search" type="text" v-on:input="handleChange" />
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid" v-if="searched">
      <div v-for="results in searchResults" :key="results.id">
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    components:{},
    data: () => ({
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted() {},
    methods: {
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get ()
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