import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import BoxOfficeByDay from '../views/BoxOfficeByDay';
import BoxOfficeByWeek from '../views/BoxOfficeByWeek';

const routes = [
  {
    path: '/',
    name: 'name',
    component: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByDay',
    component: BoxOfficeByDay
  },
  {
    path: '/boxOfficeByWeek',
    name: 'boxOfficeByWeek',
    component: BoxOfficeByWeek
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
