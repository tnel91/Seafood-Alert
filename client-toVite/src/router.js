import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import FishDetails from './components/FishDetails.vue'

const routes = [
  {
    path: '/',
    component: LandingPage,
    name: 'LandingPage',
    props: true
  },
  {
    path: '/fish/:id',
    component: FishDetails,
    name: 'FishDetails',
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
