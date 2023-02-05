<template>
  <nav>
    <div class="row align-items-center">
      <div class="nav-home p-0 col-2">
        <router-link class="navbar-text" to="/">Home</router-link>
      </div>
      <div class="nav-title col-8 text-center flex-column">
        <h2 class="navbar-text">Seafood Alert</h2>
        <p>Your guide to US Fisheries</p>
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
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Lalezar&family=Oswald&family=Source+Code+Pro:wght@700&family=Syne+Mono&display=swap');

nav {
  background-color: #e6ecfa;
  height: 120px;
  font-family: Oswald, sans-serif;
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
