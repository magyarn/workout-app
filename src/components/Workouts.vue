<template>
  <div>
    <navigation></navigation>
    <main class="m-auto p-3">
      <h1>Browse Workouts</h1>
      <b-row>
        <b-col xs="1" sm="6" lg="4" v-for="workout in allWorkouts" :key="workout.id">
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
import store from '../store'
import Navigation from './Navigation'
export default {
  name: 'Workouts',
  store,
  components: {
    Navigation
  },
  computed: {
    allWorkouts () {
      return this.$store.getters.allWorkouts
    }
  },
  methods: {
    formatTime (milliseconds) {
      return this.$moment.utc(milliseconds).format('mm:ss')
    }
  }
}
</script>
