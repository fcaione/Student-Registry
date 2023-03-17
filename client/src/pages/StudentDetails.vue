<template>
	<div class="flex-col">
		<section v-if="selectedStudent" class="details text-center">
			<h1>{{ selectedStudent.name }}</h1>
      <h2>{{ selectedStudent.email }}</h2>
      <section>
        <CourseCard v-for="course in selectedStudent.Courses" :key="course.id" :course="course" :grade="course.StudentCourse.grade" @click="this.$router.push(`/details/${course.id}`)"/>
      </section>
    </section>
	</div>
</template>

<script>
import axios from "axios"
import BASE_URL from "@/globals"
import CourseCard from "@/components/CourseCard.vue"

export default {
	name: "StudentDetails",
	components: {
		CourseCard,
	},
	data: () => ({
		selectedStudent: {},
		courses: [],
	}),
	mounted() {
		this.getStudent()
	},
	methods: {
		async getStudent() {
			const res = await axios.get(
				`${BASE_URL}/students/${this.$route.params.studentId}`
			)
			console.log(res.data)
			this.selectedStudent = res.data
		},
		async handleChange(e) {
			this.formValues[e.target.id] = e.target.value
		},
	},
}
</script>
