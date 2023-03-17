<template>
  <div class="card hidden">
    <div class="info-wrapper flex-col">
      <h3 class="text-center">{{ course.name }}</h3>
      <p>{{ course.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CourseCard',
    props: ['course'],
    methods: {}
  }
</script>







