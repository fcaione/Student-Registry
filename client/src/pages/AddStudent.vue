<template>


    <div class='SignInFormContainer'>
<div>



    <h3>Add A Student</h3>

<div class="SignInForm">

    <form @submit.prevent="handleSubmit">
        
        <div>
        <label for="name">Name:</label>
      </div>
      <div>
        <input id="name" v-model="name" type="text" placeholder="Enter name name" required>
      </div>
        <div>
        <label for="gpa">GPA:</label>
      </div>
      <div>
        <input id="grade" v-model="course" type="text" placeholder="Enter course" required>
      </div>
        <div>
        <label for="email">Email:</label>
      </div>
      <div>
        <input id="email" v-model="email" type="email" placeholder="Enter email address" required>
      </div>
        <div>
        <label for="userId">userId:</label>
      </div>

      <div>

        <input id="userId" v-model="id" type="text" placeholder="Enter Student ID" required>
      </div>
        <button type="submit">Submit</button>
    </form>
    </div>
  </div>
  </div>
</template>

<script>

export default {
    name: 'AddStudent',
    data() {
      return {
        name: '',
        email: '',
        id: '',
        course: ''

      }
    },
    methods: {
      handleSubmit(
        
      ) {
        
      }
    }
}
</script>