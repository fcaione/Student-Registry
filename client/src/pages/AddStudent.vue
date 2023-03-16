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
        <input id="name" v-model="name" type="text" placeholder="Enter name" required>
      </div>
        <div>
        <label for="email">Email:</label>
      </div>
      <div>
        <input id="email" v-model="email" type="email" placeholder="Enter email address" required>
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
    data: () => ({
      student: '',
      email: ''
    })
    ,
    methods: {
      handleSubmit() {},
      handleChange(event) {
        this[event.target.name] = event.target.value
        console.log(event)
      },
      async addStudent() {
        const userId = this.$route.params.user.id
        const res = await axios.post(`${BASE_URL}/create/${userId}`)
        console.log(res)
        this.courses=res.data
        }
    }
}
</script>