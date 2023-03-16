<template>
<div v-for="student in students" :key="student.id">
    <StudentCard />
</div>
</template>

<script>
import StudentCard from '@/components/StudentCard.vue';
export default {
    name: 'ViewStudents',
    components: {
        StudentCard
    },
    data: () => ({
        students: []
    }),
    mounted(){},
    methods: {}
}
</script>