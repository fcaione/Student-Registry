<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.name }}</h3>
      <h4>Grade: {{ student.StudentCourse.grade }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StudentCard',
    props: {
      student:{
        type: Object,
        required: true

      }
     
    }
  }
</script>
