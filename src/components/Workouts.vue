<template>
  <div>
    <navigation></navigation>
    <main class="m-auto p-3">
      <h1>Browse Workouts</h1>
      <b-row>
        <b-col xs="1" sm="6" lg="4" v-for="workout in workouts" :key="workout.id">
          <b-card tag="article" class="workout-card">
            <h2 class="workout-title">{{workout.title}}</h2>
            <p class="card-text created-by">Created by: {{workout.creator}}</p>
            <div class="row justify-content-between px-3 description">
              <p>Time: {{formatTime(workout.time)}}</p>
              <p>Level: {{workout.fitnessLevel}}</p>
            </div>
            <b-row class="workout-description">
              <b-col xs="12">
                <p class="card-text description">{{workout.description}}</p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Workouts',
  components: {
    Navigation
  },
  data () {
    return {
      workouts: [
        {
          title: '10 Minute Abs',
          description: 'Get a six pack in no time!',
          creator: 'Nathan_James89',
          id: 0,
          time: 595000,
          fitnessLevel: 'Beginner',
          routine: [
            {
              elementTitle: 'Crunches',
              quantity: 10,
              time: null
            },
            {
              elementTitle: 'Sit-ups',
              quantity: 10,
              time: null
            },
            {
              elementTitle: 'Elbow Planks',
              quantity: null,
              time: 30000
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
              time: null
            },
            {
              elementTitle: 'Overhead Press',
              quantity: 10,
              time: null
            },
            {
              elementTitle: 'Handstand',
              quantity: null,
              time: 30000
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
              time: null
            },
            {
              elementTitle: 'Single Leg Lunges',
              quantity: 10,
              time: null
            },
            {
              elementTitle: 'Wall Sit',
              quantity: null,
              time: 30000
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
              time: null
            },
            {
              elementTitle: 'Pushups',
              quantity: 10,
              time: null
            },
            {
              elementTitle: 'Wall Sit',
              quantity: null,
              time: 30000
            }
          ]
        }
      ]
    }
  },
  methods: {
    formatTime (milliseconds) {
      return this.$moment.utc(milliseconds).format('mm:ss')
    }
  }
}
</script>

<style scoped>
.workout-card {
  height: 150px;
  overflow: hidden;
  margin-bottom: 1.8rem;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
}
.workout-card:hover .workout-description {
  top: 0;
}
.workout-card:hover .description {
  transform: translateY(0px);
}
.workout-card:hover {
  cursor: pointer;
}
.workout-title {
  font-size: 1.2rem;
}
.created-by {
  font-size: .8rem;
  color: #999;
}
.description {
  font-size: .9rem;
}
.workout-description {
  position: absolute;
  top: 200px;
  left: 0;
  background-color: #157efb;
  width: 100%;
  height: 100%;
  margin-right: 0;
  z-index: 1000;
  display: block;
  color: white;
  text-align: center;
  padding-top: 4em;
  margin-left: 0;
  transition: all .3s ease;
}
.workout-description .description {
  transform: translateY(200px);
  transition: all .3s .1s ease;
}
</style>
