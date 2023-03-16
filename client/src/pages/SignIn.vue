<template>
  <div>
    
    
    <div class='SignInFormContainer'>
    <h1>Sign In</h1>
  
  
  
  <div class="SignInForm">
    <form  v-on:submit="handleSubmit">
      <div>
        <input @input="handleChange" placeholder="Email" :value="email" name="email" type="email" />
    </div>
     <div>
      <input @input="handleChange" placeholder="Password" :value="password" name="password" type="password" />
    </div>
    </form>
  <div>
    <h4>If you dont have an account, Sign Up Here!</h4>
  </div>
    <div>
      <button @click="handleSubmit" :disabled="!email || !password">Log In</button>
  
  </div>
  </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "SignIn",
    props: {
      email: String,
      password: String
    },
    methods: {
      handleChange(e) {
        this.$emit('handleFormChange', e.target.name, e.target.value)
      },
      handleSubmit(e) {
        e.preventDefault()
           this.$emit('handleSubmit')
  
      }
      // registerAccount(e){
      //   e.preventDefault()
      //         this.$emit('handleSubmit')
  
      //   // this.$router.push('/signUp')
      // }
    }
  }
  </script>