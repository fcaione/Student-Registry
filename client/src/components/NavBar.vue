<template>
<nav>
    <router-link to="/">Home</router-link>
    <router-link to="/signUp" v-if="!user">SignUp</router-link>
    <router-link to="/signIn" v-if="!user">SignIn</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/about">About</router-link>

  </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ["user"]
  }
</script>

<style scoped>

</style>