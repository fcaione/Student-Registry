<template>
<div v-for="course in course" :key="course.id">
    <CourseCard />
</div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';

export default {
    name: 'ViewCourses',
    components: {
        CourseCard
    },
    data: () => ({
        courses: []
    }),
    mounted(){},
    methods: {}
}
</script> 