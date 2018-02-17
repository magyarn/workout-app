import Vue from 'vue'
import Router from 'vue-router'
import Workouts from '@/components/Workouts'
import MyWorkouts from '@/components/MyWorkouts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Workouts',
      component: Workouts
    },
    {
      path: '/my-workouts',
      name: 'MyWorkouts',
      component: MyWorkouts
    }
  ],
  mode: 'history'
})
