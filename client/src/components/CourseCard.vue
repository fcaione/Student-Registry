<template>
  <div>
    <h3>Add A Course</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" placeholder="Enter course name" required>
      </div>
      <div>
        <label for="grade">Grade:</label>
        <input id="grade" v-model="grade" type="text" placeholder="Enter course grade" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        grade: ''
      }
    },
    methods: {
      handleSubmit() {
        
      }
    }
  }
</script>






