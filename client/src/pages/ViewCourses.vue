<template>
<div >
    <CourseCard v-for="course in courses" :key="course.id" :course="course"/>
</div>
</template>

<script>
import axios from "axios"
import CourseCard from '@/components/CourseCard.vue';
import BASE_URL from '@/globals';

console.log(BASE_URL)
export default {
    name: 'ViewCourses',
    components: {
        CourseCard
    },
    data: () => ({
        courses: []
    }),
    mounted(){this.getCourse()},
    methods: {
        async getCourse() {
        const res = await axios.get(`${BASE_URL}/courses`)
        console.log(res)
        this.courses=res.data.results
        }
    }
}
</script> 