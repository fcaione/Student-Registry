<template>
	<section v-if="selectedCourse" class="details">
        <h3>{{ selectedCourse.name }}</h3>
        <h3>{{ selectedCourse.description }}</h3>
    </section>
	<section>
		<StudentCard v-for="student in selectedCourse.Students" :key="student.id" :student="student"/>
	</section>
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
	}),
	mounted() {
		this.getCourse()
	},
	methods: {
		async getCourse() {
			const res = await axios.get(
				`${BASE_URL}/courses/${this.$route.params.courseId}`
			)
			console.log(res.data)
			this.selectedCourse = res.data
		},
	},
}
</script>
