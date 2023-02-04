<template>
  <div id="app">
    <NavBar />
    <main>
      <RouterView header="Fish Guide"></RouterView>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto
}

[class*="col-"] {
  background-color: #eee;
  border: 1px solid #ddd;
  padding-bottom: 15px;
  padding-top: 15px;
  text-align: center;
}
</style>
