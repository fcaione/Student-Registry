<template>
<div>
  
  
  <div class='SignInFormContainer'>
  <h1>Sign In</h1>
<div class="SignInForm">
  <form  @submit="handleSubmit">
    <div>
    <input placeholder="Email Address" name="email" type="email" :value="email" v-on:input="handleChange"/>
  </div>
  <div>
    <input placeholder="Password" name="password" type="text" :value="password" v-on:input="handleChange"/>
  </div>
  </form>
  <div>
    <button @click="registerAccount">Sign In!</button>
  </div>
</div>
</div>

<div>
  <h4>If you don't have an account, Sign Up Here!</h4>

</div>
</div>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault()
			const res = await axios.post(`${BASE_URL}/users/login`, {
        email: this.email,
        password: this.password
      })
      localStorage.setItem("userId", res.data.id)
		},
		handleChange(event) {
			this[event.target.name] = event.target.value
		},
	},
}
</script>