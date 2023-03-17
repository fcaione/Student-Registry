<template>
<nav>
    <router-link to="/">Home</router-link>
    <router-link to="/signUp" v-if='!localStorage?.getItem("userId")'>SignUp</router-link>
    <router-link to="/signIn" v-if='!localStorage?.getItem("userId")'>SignIn</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/students/add">Add Students</router-link>
    <router-link to="/courses/add">Add Courses</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
  }
</script>

<style scoped>

</style>