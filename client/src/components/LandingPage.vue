<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchInput" placeholder="Search name" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
// Any Imports
export default {
name: 'LandingPage',
data: ()=>({
  searchInput: ''
}),
methods: {
  handleSubmit() {
    // Perform the search action here using the searchTerm value
    console.log(`Searching for: ${this.searchInput}`);
    this.searchInput = ''
  }
},
}
</script>

<style>
</style>