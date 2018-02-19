<template>
  <div>
    <navigation></navigation>
    <main class="m-auto p-3">
      <h1>{{workout.title}}</h1>
      <b-row>
        <b-col xs="12">
          <b-tabs>
            <b-tab title="About" active>
              <b-row>
                <b-col xs="12" md="6" lg="2" class="bg-secondary text-light m-3 p-2">
                  <p>Time: {{formatTime(workout.time)}}</p>
                  <p>Level: {{workout.fitnessLevel}}</p>
                  <p>Created by: {{workout.creator}}</p>
                </b-col>
                <b-col xs="12" md="6" lg="9" class="m-3">
                  <p>{{workout.description}}</p>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Routine">
              <b-row v-for="element in workout.routine" :key="element.elementID">
                <b-col xs="12" md="6" class="row justify-content-between ml-1">
                  <p>{{element.elementTitle}}:</p>
                  <p>{{element.quantity || formatTime(element.time)}}</p>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="History"></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import store from '../store'
import Navigation from './Navigation'
export default {
  store,
  props: ['id'],
  components: {
    Navigation
  },
  computed: {
    workout () {
      return this.$store.getters.loadedWorkout(this.id)
    }
  },
  methods: {
    formatTime (milliseconds) {
      return this.$moment.utc(milliseconds).format('mm:ss')
    }
  }
}
</script>
