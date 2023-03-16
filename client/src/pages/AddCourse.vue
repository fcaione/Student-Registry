<template>
  
  <div class='SignInFormContainer'>
  <div>

  <h3>Add A Course</h3>

  <div class="SignInForm">
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
    </div>
    <div>
      <input id="name" v-model="name" type="text" placeholder="Enter course name" required>
    </div>
    <div>
      <label for="grade">Grade:</label>
    </div>
    <div>
      <input id="grade" v-model="grade" type="text" placeholder="Enter course grade" required>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</div> 
  </div>

</div>

</template>



<script>
  export default {
    name: 'AddCourse',
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
