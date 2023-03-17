<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.name }}</h3>
      <h4 v-if="student.StudentCourse?.grade">Grade: {{ student.StudentCourse.grade }}</h4>
      <!-- <h4>GPA: {{ gpa }}</h4> -->
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
        this.gpa = this.courses.reduce((a, b) => (a.StudentCourse.grade + b.StudentCourse.grade));
        console.log(this.gpa)
      }
    }
  }
</script>
