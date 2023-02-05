<template>
  <nav>
    <div class="row align-items-center">
      <div class="nav-home p-0 col-2">
        <router-link class="navbar-text" to="/">Home</router-link>
      </div>
      <div class="nav-title col-8 text-center">
        <h2 class="navbar-text">Seafood Alert</h2>
      </div>
      <div class="col-2"></div>
    </div>
  </nav>
</template>

<script>
// Any Imports
export default {
  name: 'NavBar'
}
</script>

<style>
nav {
  background-color: #eee;
  height: 80px;
}

.nav-title h2 {
  font-size: 2em;
  font-weight: bold;
}

.nav-home {
  font-size: 2em;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.nav-home a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: black;
}

.nav-home a:hover {
  color: blue;
  background-color: lightgray;
}
</style>
