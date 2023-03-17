<template>
	<div class="flex-col">
		<section v-if="selectedCourse" class="details text-center">
			<h1>{{ selectedCourse.name }}</h1>
			<h3>{{ selectedCourse.description }}</h3>
		</section>

		<button @click="this.isAssigning = !this.isAssigning">
			Assign a student to course
		</button>

		<section v-if="isAssigning" class="text-center">
			<form @submit="handleSubmit" class="flex-col">
				<select @change="handleChange" name="student" id="studentId">
					<option hidden>Select a student</option>
					<option
						v-for="student in students"
						:key="student.id"
						:value="student.id"
					>
						{{ student.name }}
					</option>
				</select>
				<select @change="handleChange" name="grade" id="grade">
					<option>Select a Grade</option>
					<option value="4">A</option>
					<option value="3">B</option>
					<option value="2">C</option>
					<option value="1">D</option>
					<option value="0">F</option>
				</select>
				<button>Submit</button>
			</form>
		</section>
		<section class="flex-row">
			<StudentCard
				v-for="student in selectedCourse.Students"
				:key="student.id"
				:student="student"
			/>
		</section>
	</div>
</template>

<script>
import axios from "axios"
import BASE_URL from "@/globals"
import StudentCard from "@/components/StudentCard.vue"

export default {
	name: "CourseDetails",
	components: {
		StudentCard,
	},
	data: () => ({
		selectedCourse: {},
		isAssigning: true,
		formValues: {
			studentId: null,
			grade: null,
		},
		students: [],
	}),
	mounted() {
		this.getCourse()
		this.getAllStudents()
	},
	methods: {
		async getCourse() {
			const res = await axios.get(
				`${BASE_URL}/courses/${this.$route.params.courseId}`
			)
			console.log(res.data)
			this.selectedCourse = res.data
		},
		async getAllStudents() {
			const res = await axios.get(`${BASE_URL}/students`)
			console.log(res.data)
			this.students = res.data
		},
		async handleSubmit() {
			await axios.post(`${BASE_URL}/studentcourses/create`, {
				studentId: this.formValues.studentId,
				grade: this.formValues.grade,
				courseId: this.$route.params.courseId,
			})
			this.getCourse()
		},
		async handleChange(e) {
			this.formValues[e.target.id] = e.target.value
		},
	},
}
</script>
