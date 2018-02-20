<template>
  <div>
    <navigation></navigation>
    <main class="m-auto p-3">
      <h1>Browse Workouts</h1>
      <b-row>
        <b-col md="3" lg="2">
          Created By:
          <b-form-select v-model="createdBy" class="mb-3">
            <option :value="null">Anyone</option>
            <option v-for="(creator, i) in allCreators" :value="creator" :key="i">{{creator}}</option>
          </b-form-select>
        </b-col>
        <b-col md="3" lg="2">
          Levels:
          <b-form-select v-model="level" class="mb-3">
            <option :value="null">All</option>
            <option v-for="(level, i) in allLevels" :value="level" :key="i">{{level}}</option>
          </b-form-select>
        </b-col>
        <b-col md="3" lg="2">
          Time (Minutes):
           <vue-slider
             v-model="time"
             :max="maxTime"
             :style="{'marginTop': '1.3em'}"
             :tooltipStyle="[{'backgroundColor': 'white', 'borderColor': 'white', 'color': 'black', 'marginBottom': '-.5em', 'fontSize': '.6em'},
               {'backgroundColor': 'white', 'borderColor': 'white', 'color': 'black', 'marginBottom': '-.5em', 'fontSize': '.6em'}
             ]"
               :processStyle="{'backgroundColor': '#157efb'}"
             ></vue-slider>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="1" sm="6" lg="4" v-for="workout in filteredWorkouts" :key="workout.id">
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
import vueSlider from 'vue-slider-component'
export default {
  name: 'Workouts',
  store,
  data () {
    return {
      createdBy: null,
      level: null,
      time: [0, 26],
      loadedWorkouts: this.allWorkouts
    }
  },
  components: {
    Navigation,
    vueSlider
  },
  computed: {
    allWorkouts () {
      return this.$store.getters.allWorkouts
    },
    allCreators () {
      return this.$store.getters.allCreators
    },
    allLevels () {
      return this.$store.getters.allLevels
    },
    maxTime () {
      const times = this.$store.getters.allWorkouts.map(w => w.time)
      const max = times.reduce((max, next) => next > max ? next : max, 0)
      return Number(this.$moment.duration(max).minutes())
    },
    filteredWorkouts () {
      let originalWorkouts = this.allWorkouts
      if (this.createdBy) {
        originalWorkouts = originalWorkouts.filter(this.creatorFilter)
      }
      if (this.level) {
        originalWorkouts = originalWorkouts.filter(this.levelFilter)
      }
      if (this.time[0] !== 0 || this.time[1] !== this.maxTime) {
        originalWorkouts = originalWorkouts.filter(this.timeFilter)
      }
      return originalWorkouts
    }
  },
  methods: {
    formatTime (milliseconds) {
      return this.$moment.utc(milliseconds).format('mm:ss')
    },
    toMilliseconds (minutes) {
      return minutes * 60000
    },
    creatorFilter (workout) {
      if (this.createdBy && workout.creator === this.createdBy) {
        return workout
      }
    },
    levelFilter (workout) {
      if (this.level && workout.fitnessLevel === this.level) {
        return workout
      }
    },
    timeFilter (workout) {
      if (workout.time >= this.toMilliseconds(this.time[0]) && workout.time <= this.toMilliseconds(this.time[1])) {
        return workout
      }
    }
  }
}
</script>
