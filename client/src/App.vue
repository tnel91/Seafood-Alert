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
      console.log('fired')
      let links = document.links
      // console.log(links)
      // console.log(links[5])
      // console.log(links[5].target)

      // console.log(links[5].hostname, window.location.hostname)
      for (let i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname) {
          // console.log(links[i].target)
          links[i].target = '_blank'
          links[i].rel = 'noopener noreferrer'
          // console.log(links[i].target)
        }
      }
      // console.log(links[5])
      // console.log(links[5].target)
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
  position: relative;
  top: 70px;
  min-height: 800px;
}
</style>
