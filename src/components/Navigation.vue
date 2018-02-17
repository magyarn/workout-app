<template>
  <b-navbar variant="primary" type="dark" toggleable class="justify-content-between">
    <b-navbar-brand to="/">WorkoutApp</b-navbar-brand>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav role="navigation" class="ml-auto">
        <b-nav-item to="/">Browse Workouts</b-nav-item>
        <b-nav-item to="/my-workouts">My Workouts</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
