<template>
<div v-for="course in courses" :key="course.id">
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
    methods: {

    }
}
</script> 