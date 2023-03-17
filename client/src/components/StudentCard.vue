<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.name }}</h3>
      <h4 v-if="student.StudentCourse?.grade === 4">Grade: A</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 3">Grade: B</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 2">Grade: C</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 1">Grade: D</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 0">Grade: F</h4>
      <h4 v-if="gpa">GPA: {{ gpa }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StudentCard',
    data: () => ({
      gpa: null,
      courses: []
    }),
    mounted(){this.calculateGpa()},
    props: {
      student: {
        type: Object,
        required: true
      },
    },
    methods: {
      calculateGpa() {
        this.courses = this.student.Courses
        console.log(this.courses)
        const res = this.courses?.reduce((acc, currentValue) => acc + currentValue.StudentCourse.grade, 0)
        this.gpa = res / this.courses?.length
        console.log(this.gpa)
      }
    }
  }
</script>
