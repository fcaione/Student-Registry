<template>
    <div >
        <CourseCard v-for="course in courses" :key="course.id" :course="course" @click="this.$router.push(`/details/${course.id}`)"/>
    </div>
    </template>
    
    <script>
    import axios from "axios"
    import CourseCard from '@/components/CourseCard.vue'
    import BASE_URL from "@/globals"
    
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
            this.courses=res.data
            }
        }
    }
    </script> 