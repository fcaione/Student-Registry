<template>
<div>
  <h1>Sign Up</h1>
  <form @submit="handleSubmit">
    <input placeholder="Email Address" name="email" type="email" :value="email" v-on:input="handleChange"/>
    <input placeholder="Password" name="password" type="text" :value="password" v-on:input="handleChange"/>
    <button>Sign Up!</button>
  </form>
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