<template>
  <div class='SignInFormContainer'>
    <div>
    <h1>Sign Up</h1>
<div class="SignInForm">
  <form  @submit="handleSubmit">
    <div>
    <input placeholder="Email Address" name="email" type="email" :value="email" v-on:input="handleChange"/>
  </div>
  <div>
    <input placeholder="Name" name="name" type="name" :value="name" v-on:input="handleChange"/>
  </div>
  <div>
    <input placeholder="Password" name="password" type="password" :value="password" v-on:input="handleChange"/>
  </div>
  <button type="submit" >Sign Up!</button>
  </form>
  <div>
</div>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import BASE_URL from "@/globals"
export default {
    name: 'SignUp',
    data: () => ({
    email: '',
    name: '',
    password: ''
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      await axios.post(`${BASE_URL}/users/create`, {
      email: this.email,
      name: this.name,
      password: this.password
    })
    // this.$router.push('/signIn')
    },
}
}
</script>