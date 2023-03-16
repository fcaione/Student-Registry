import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import AddStudent from './pages/AddStudent'
import ViewCourses from './pages/ViewCourses'
import ViewStudents from './pages/ViewStudents'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  { path: '/students/add', component: AddStudent, name: 'AddStudent' },
  { path: '/students', component: ViewStudents, name: 'ViewStudents' },
  { path: '/courses', component: ViewCourses, name: 'ViewCourses' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
