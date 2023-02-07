<template>
  <div id="app">
    <div class="fixed-top">
      <NavBar />
    </div>
    <main>
      <RouterView
        header="Fish Guide"
        :removePath="removePath"
        :changeLinkTarget="changeLinkTarget"
      ></RouterView>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  components: {
    NavBar
  },

  methods: {
    removePath(url) {
      let a = url.replace('/profiles/', '')
      return a.replace('-farmed', '')
    },
    changeLinkTarget() {
      console.log('changeLinkTarget called')
      let links = document.links
      for (let i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname) {
          links[i].target = '_blank'
          links[i].rel = 'noopener noreferrer'
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
}

[class*='col-'] {
  /* background-color: #eee; */
  /* border: 1px solid #ddd; */
  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  background-color: rgb(170, 255, 255);
  background-image: url('https://images.unsplash.com/photo-1543988884-c01cfa7b41c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80');
  background-size: cover;
  /* background-repeat: repeat-y; */
  position: relative;
  top: 110px;
  min-height: 800px;
}
</style>
