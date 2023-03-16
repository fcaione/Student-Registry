<template>
<div>
  <h1>Sign In</h1>
  <form @submit="handleSubmit">
    <input placeholder="Email Address" name="email" type="email" :value="email" v-on:input="handleChange"/>
    <input placeholder="Password" name="password" type="text" :value="password" v-on:input="handleChange"/>
    <button>Sign In!</button>
  </form>
  <h4>If you dont have an account, Sign Up Here!</h4>
  <button @click="registerAccount">Sign Up</button>
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
      this.email=''
      this.password=''
    },
    registerAccount(){
      this.$router.push('/signUp')
    }
  }
}
</script>