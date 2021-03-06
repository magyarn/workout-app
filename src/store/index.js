import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: 'Nathan_James89',
    allCreators: null,
    workouts: [
      {
        title: '10 Minute Abs',
        description: 'Get a six pack in no time!',
        creator: 'Porscha_MK90',
        id: 0,
        time: 595000,
        fitnessLevel: 'Beginner',
        routine: [
          {
            elementTitle: 'Crunches',
            quantity: 10,
            time: null,
            elementID: 0
          },
          {
            elementTitle: 'Sit-ups',
            quantity: 10,
            time: null,
            elementID: 1
          },
          {
            elementTitle: 'Elbow Planks',
            quantity: null,
            time: 30000,
            elementID: 2
          }
        ]
      },
      {
        title: 'Upper Body Breakdown',
        description: 'Build your arms and shoulders in this upper body blaster!',
        creator: 'Nathan_James89',
        id: 1,
        time: 495000,
        fitnessLevel: 'Intermediate',
        routine: [
          {
            elementTitle: 'Push-ups',
            quantity: 10,
            time: null,
            elementID: 0
          },
          {
            elementTitle: 'Overhead Press',
            quantity: 10,
            time: null,
            elementID: 1
          },
          {
            elementTitle: 'Handstand',
            quantity: null,
            time: 30000,
            elementID: 2
          }
        ]
      },
      {
        title: 'The Legendary Leg Workout',
        description: 'Work your legs like never before!',
        creator: 'Nathan_James89',
        id: 2,
        time: 1595000,
        fitnessLevel: 'Advanced',
        routine: [
          {
            elementTitle: 'Squats',
            quantity: 10,
            time: null,
            elementID: 0
          },
          {
            elementTitle: 'Single Leg Lunges',
            quantity: 10,
            time: null,
            elementID: 1
          },
          {
            elementTitle: 'Wall Sit',
            quantity: null,
            time: 30000,
            elementID: 2
          }
        ]
      },
      {
        title: 'Whole Body Burnout',
        description: 'Put your upper, lower, and core body to the test!',
        creator: 'Nathan_James89',
        id: 3,
        time: 895000,
        fitnessLevel: 'Intermediate',
        routine: [
          {
            elementTitle: 'Crunches',
            quantity: 10,
            time: null,
            elementID: 0
          },
          {
            elementTitle: 'Pushups',
            quantity: 10,
            time: null,
            elementID: 1
          },
          {
            elementTitle: 'Wall Sit',
            quantity: null,
            time: 30000,
            elementID: 2
          }
        ]
      }
    ]
  },
  getters: {
    allWorkouts: state => {
      console.log('Getting all workouts')
      return state.workouts
    },
    myWorkouts: state => {
      return state.workouts.filter(workout => workout.creator === state.currentUser)
    },
    loadedWorkout (state) {
      return (workoutid) => {
        return state.workouts.find(workout =>
          workout.id === Number(workoutid)
        )
      }
    },
    allCreators (state) {
      const creators = state.workouts.map(workout => workout.creator)
      state.allCreators = [...new Set(creators)]
      console.log(state.allCreators)
      return state.allCreators
    },
    allLevels (state) {
      const levels = state.workouts.map(w => w.fitnessLevel)
      return [...new Set(levels)]
    }
  }
})
