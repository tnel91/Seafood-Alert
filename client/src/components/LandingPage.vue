<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchInput" placeholder="Search name" />
      <button type="submit">Search</button>
      <button type="button" @click.prevent="findAll">Find All</button>
    </form>
  </div>
  <div>
    <ul>
      <li v-for="result in searchResults" :key="result['Scientific Name']">
        <h3>{{ result['Scientific Name'] }}</h3>
        <p>{{ result['Species Name'] }}</p>
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

methods: {
  async handleSubmit() {
    console.log(`https://www.fishwatch.gov/api/species/${this.searchInput}`)
    await axios.get(`https://www.fishwatch.gov/api/species/${this.searchInput}`)
      .then((res) => {
        this.searchResults = res.data
      })
    console.log(`Searching for: ${this.searchInput}`);
    this.searchInput = ''
  },

  async findAll() {
    await axios.get('https://www.fishwatch.gov/api/species')
      .then((res) => {
        console.log(res.data)
        const filterdData = res.data.filter((fish) => {
          if (fish["Species Name"] === this.searchInput) {
            console.log(fish["Species Name"])
            return fish
          }
        })
        console.log(filterdData)
        this.searchResults = filterdData
        const h4 = document.querySelector('h4')
        if (this.searchResults.length === 0) {
          h4.style.display = 'block'
        } else {
          h4.style.display = 'none'
        }
      })
    console.log(`Searching for all fish`);
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