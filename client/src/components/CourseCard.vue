<template>
  <div class="card hidden">
    <div class="info-wrapper flex-col">
      <h3 class="text-center">{{ course.name }}</h3>
      <!-- <h3 v-if="grade">{{ grade }}</h3> -->
      <h4 v-if="grade === 4">Grade: A</h4>
      <h4 v-else-if="grade === 3">Grade: B</h4>
      <h4 v-else-if="grade === 2">Grade: C</h4>
      <h4 v-else-if="grade === 1">Grade: D</h4>
      <h4 v-else-if="grade === 0">Grade: F</h4>
      <p>{{ course.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CourseCard',
    props: ['course','grade'],
    methods: {}
  }
</script>







