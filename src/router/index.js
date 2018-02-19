import Vue from 'vue'
import Router from 'vue-router'
import Workouts from '@/components/Workouts'
import Workout from '@/components/Workout'
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
      path: '/workouts/:id',
      name: 'Workout',
      component: Workout,
      props: true
    },
    {
      path: '/my-workouts',
      name: 'MyWorkouts',
      component: MyWorkouts
    }
  ],
  mode: 'history'
})
