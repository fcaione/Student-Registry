<template>
<section class="details">
    <div class="flex-row space">
        <!-- <h3>{{ courseDetails.name }}</h3> -->
        <!-- <p>{{ courseDetails.description }}</p> -->
    </div>
    <button @click="this.$router.push('/')"></button>
</section>
</template>

<script>
export default {
    name: 'CourseDetails',
    data: () =>({
        courseDetails: null
    }),
    mounted() {},
    methods: {}
}
</script>