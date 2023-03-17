<template>
  <div class="SignInFormContainer">
    <div>
      <h1>Add A Student</h1>
      <div class="SignInForm">
        <form @submit.prevent="handleSubmit">
          <label for="name">Name:</label>
          <input
            @input="handleChange"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            :value="name"
            required
          />
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter email address"
            required
          />
          <button type="submit">Add Student!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BASE_URL from '@/globals'
export default {
  name: 'AddStudent',
  data: () => ({
    name: '',
    email: ''
  }),
  methods: {
    async handleSubmit() {
      const res = await axios.post(
        `${BASE_URL}/students/create/${localStorage.getItem('userId')}`,
        {
          name: this.name,
          email: this.email
        }
      )
      console.log(res)
      this.courses = res.data
      this.$router.push('/students')
    },
    handleChange(event) {
      this[event.target.name] = event.target.value
      console.log(this.name)
    }
  }
}
</script>
