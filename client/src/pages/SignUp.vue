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
    <input placeholder="Password" name="password" type="text" :value="password" v-on:input="handleChange"/>
  </div>
  </form>
  <div>
    <h4>If you dont have an account, Sign Up Here!</h4>

  <button>Sign Up!</button>

</div>
</div>
</div>
</div>





</template>

<script>

export default {
    name: 'SignUp',
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
}
}
</script>