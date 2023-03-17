<template>
	<div class="homePageContainer">
		<div>
			<img id="homePic" :src="image" alt="" />
			<h1 class="homeText">Welcome to the student registry!</h1>
		</div>
		<div v-if="this.user" class="homeButtonContainer flex-row">
			<button class="homeButton" @click="this.$router.push('/courses/add')">
				Add Course
			</button>
			<button class="homeButton" @click="this.$router.push('/students/add')">
				Add Student!
			</button>
		</div>
		<div v-else>
			<h1>Please sign in to Add courses and students</h1>
		</div>
	</div>
</template>

<script>
import homeImage from "../images/lecture.jpg"
export default {
	name: "HomePage",
	components: {},
	data: () => ({
		image: homeImage,
	}),
	props: ["user"],
	mounted() {},
	methods: {
		getSearchResults(e) {
			e.preventDefault()
			const res = (this.searchResults = res.data.results)
			this.searched = true
			this.searchQuery = ""
		},
		handleChange(event) {
			this[event.target.name] = event.target.value
			console.log(event)
		},
	},
}
</script>
