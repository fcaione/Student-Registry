<template>
  <div class="container-grid">
    <div class="student">
      <h1 class="Title">Student List</h1>
      <div class="generalPage">
        <div class="student-Card">
          <div class="column1">
            <div v-for="(student) in students" :key="student.id">
              <!-- <router-link :to="'/StudentDetails/' + student.id"> -->
                <img :src="student.image" alt="student image" class="homepic" />
              <!-- </router-link> -->
              <!-- <p class="make">{{ student.name }} {{ student. }}</p> -->
            </div>
          </div>
          <div class="column2">
            <div v-for="(student, index) in students" :key="student.id">
              <div v-if="index % 2 !== 0" class="Student-Card2">
                <!-- <router-link :to="'/StudentDetails/' + student.id"> -->
                  <img :src="student.image" alt="student" class="homepic" />
                <!-- </router-link> -->
                <p class="make">{{ student.name }} {{ student.course }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewStudents',
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getAllStudents();
  },
  methods: {
    async getAllStudents() {

    },
  },
};
</script>
