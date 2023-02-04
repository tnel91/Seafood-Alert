<template>
  <div v-if="fish" >
    <h3>{{ fish['Species Name'] }}</h3>
    <h5>{{ fish['Scientific Name'] }}</h5>
    <p>{{ fish['Population'] }}</p>
    <!-- <iframe>{{ fish['Fishery Management'] }}</iframe> -->
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'FishDetails',

data: ()=>({
  fish: null
}),

async created() {
  await axios.get(`https://www.fishwatch.gov/api/species/${this.$route.params.id}`)
    .then((res) => {
      const oneFish = res.data[0]
      this.fish = oneFish
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
