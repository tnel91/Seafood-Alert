<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchInput" placeholder="Search name" />
      <button type="submit">Search</button>
    </form>
  </div>
  <div>
    <ul>
      <li class="card" v-for="(result, i) in searchResults" :key="i" @click="goToFishDetails(result['Path'])">
        <h3>{{ result['Species Name'] }}</h3>
        <h5>{{ result['Scientific Name'] }}</h5>
        <p>{{ result['Population'] }}</p>
      </li>
    </ul>
    <h4>No Results Found</h4>
  </div>
</template>

<script>
import axios from 'axios';

export default {
name: 'LandingPage',
data: ()=>({
  searchInput: '',
  searchResults: null
}),

props: {
  removePath: {
    type: Function,
  }
},

methods: {



  goToFishDetails(path) {
    let updatedPath = this.removePath(path)
    this.$router.push({
      name: 'FishDetails',
      params: {
        id: updatedPath
      }
    })
  },

  async handleSubmit() {
    await axios.get('https://www.fishwatch.gov/api/species')
      .then((res) => {
        const filterdData = res.data.filter((fish) => {
          let searchedName = this.searchInput.toLowerCase()
          let commonName = fish["Species Name"].toLowerCase()
          if (commonName.includes(searchedName)) {
            return fish
          }
        })
        this.searchResults = filterdData
        const h4 = document.querySelector('h4')
        if (this.searchResults.length === 0) {
          h4.style.display = 'block'
        } else {
          h4.style.display = 'none'
        }
      }).catch((err) => {
        console.log(err)
      })
    this.searchInput = ''
  }
},

}
</script>

<style>
h4 {
  display: none;
}
</style>