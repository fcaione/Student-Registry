<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3 class="text-center">{{ student.name }}</h3>
      <h3 class="text-center">{{ student.email}}</h3>
      <h4 v-if="student.StudentCourse?.grade === 4">Grade: A</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 3">Grade: B</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 2">Grade: C</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 1">Grade: D</h4>
      <h4 v-else-if="student.StudentCourse?.grade === 0">Grade: F</h4>
      <h4 v-if="active && gpa" class="green">GPA: {{ gpa }}</h4>
      <h4 v-else-if="active && !gpa" class="red">Not enrolled in any courses</h4>
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
      active: {
        type: Boolean
      }
    },
    methods: {
      calculateGpa() {
        this.courses = this.student.Courses
        const res = this.courses?.reduce((acc, currentValue) => acc + currentValue.StudentCourse.grade, 0)
        if (res) {
          this.gpa = (res / this.courses?.length).toFixed(2)
        }
      }
    }
  }
</script>
