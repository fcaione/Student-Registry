<template>
  <div class="SignInFormContainer">
    <h1>Sign In</h1>
    <div class="SignInForm">
      <form @submit="handleSubmit">
        <label for="email">Email</label>
        <input
          @input="handleChange"
          placeholder="Email"
          :value="email"
          name="email"
          type="email"
        />
        <label for="password">Password</label>
        <input
          @input="handleChange"
          placeholder="Password"
          :value="password"
          name="password"
          type="password"
        />
        <button type="submit" :disabled="!email || !password">Log In</button>
      </form>
      <div>
        <h4>Don't have an account? <a href="/signUp">Sign Up Here!</a></h4>
        
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BASE_URL from '@/globals'

export default {
name: "SignIn",
data: () => ({
  email: "",
  password: ""
}),
methods: {
  async handleSubmit(e) {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/users/login`, {
      email: this.email,
      password: this.password,
      
    })
    localStorage.setItem("userId", res.data.id)
    this.$router.push('/')
  },
  handleChange(event) {
    this[event.target.name] = event.target.value
  },
},
}
</script>