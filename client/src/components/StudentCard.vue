<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.name }}</h3>
      <h4 v-if="student.StudentCourse?.grade">Grade: {{ student.StudentCourse.grade }}</h4>
      <h4>GPA: {{ GPA }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StudentCard',
    data: () => ({
      GPA: 5
    }),
    mounted(){this.calculateGpa},
    props: {
      student: {
        type: Object,
        required: true

      },
    },
    methods: {
      calculateGpa() {
        console.log(this.student)
      }
    }
  }
</script>
