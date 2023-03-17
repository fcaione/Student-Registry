<template>
  <div class="flex-col">
    <h1 class="text-center">Students</h1>
    <div class="flex-row">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
        active="true"
        @click="this.$router.push(`/students/${student.id}`)"
      />
    </div>
    <button class="viewButton" @click="this.$router.push('/students/add')">
      Add Student!
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import StudentCard from '@/components/StudentCard.vue'
import BASE_URL from '@/globals'

export default {
  name: 'ViewStudents',
  components: {
    StudentCard
  },
  data: () => ({
    students: []
  }),
  mounted() {
    this.getStudent()
  },
  methods: {
    async getStudent() {
      const res = await axios.get(`${BASE_URL}/students`)
      console.log(res)
      this.students = res.data
    }
  }
}
</script>
