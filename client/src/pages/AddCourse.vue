<template>
  
  <div class='SignInFormContainer'>
  <div>

  <h1>Add A Course</h1>

  <div class="SignInForm">
				<form @submit.prevent="handleSubmit">
					<label for="name">Name:</label>
					<input
						@input="handleChange"
						id="name"
						name="name"
						type="text"
						placeholder="Enter name"
						:value="name"
						required
					/>
					<label for="description">Description</label>
					<input
						@input="handleChange"
						id="description"
						name="description"
						type="text"
						placeholder="Enter description"
						:value="description"
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
  </div>

</div>

</template>



<script>
import axios from 'axios'
import BASE_URL from '@/globals'

  export default {
    name: 'AddCourse',
    data() {
      return {
        name: '',
        description: ''
      }
    },
    methods: {
      async handleSubmit() {
			const res = await axios.post(`${BASE_URL}/courses/create/`, {
				name: this.name,
        description: this.description
			})
			console.log(res)
			this.courses = res.data
			this.$router.push('/courses')
		},
		handleChange(event) {
			this[event.target.name] = event.target.value
			console.log(this.name)
		},
    }
  }
</script>
