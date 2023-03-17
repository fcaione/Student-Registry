<template>
	<div id="app">
		<header>
			<NavBar :user="user" />
		</header>
		<main>
			<router-view :user="user"></router-view>
		</main>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
	name: "App",
	components: {
		NavBar,
	},
	data: () => ({
		user: false,
	}),
	mounted() {
		this.getUser()
	},
	methods: {
		getUser() {
			if (localStorage.getItem("userId")) {
				this.user = true
			}
		},
	},
}
</script>
