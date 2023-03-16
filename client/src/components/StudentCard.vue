<template>
  <div>
    <h3>Add A Course</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" placeholder="Enter name here" required>
      </div>
      <div>
        <label for="grade">Email:</label>
        <input id="grade" v-model="email" type="email" placeholder="Enter email here" required>
      </div>
      <div>
        <label for="grade">Id:</label>
        <input id="grade" v-model="id" type="text" placeholder="Enter grade here" required>
      </div>
      <div>
        <label for="grade">Course:</label>
        <input id="grade" v-model="course" type="text" placeholder="Enter course here" required>
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
        grade: '',
        email: '',
        id: '',
        course: ''
      }
    },
    methods: {
      handleSubmit() {
        
      }
    }
  }
</script>
