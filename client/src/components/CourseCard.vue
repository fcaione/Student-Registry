<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ course.name }}</h3>
      <p>{{ course.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CourseCard',
    props: ['name', 'description'],
    methods: {}
  }
</script>







