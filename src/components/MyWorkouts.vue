<template>
  <div>
    <navigation></navigation>
    <main class="m-auto p-3">
      <h1>My Workouts</h1>
      <b-row>
        <b-col xs="1" sm="6" lg="4" v-for="workout in myWorkouts" :key="workout.id">
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
                <b-button class="btn description text-primary bg-white view-wkt-btn" :workout="workout" :to="'/workouts/' + workout.id">VIEW WORKOUT</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import store from '../store'
import Navigation from './Navigation'
export default {
  name: 'MyWorkouts',
  store,
  components: {
    Navigation
  },
  computed: {
    myWorkouts () {
      return this.$store.getters.myWorkouts
    }
  },
  methods: {
    formatTime (milliseconds) {
      return this.$moment.utc(milliseconds).format('mm:ss')
    }
  }
}
</script>
