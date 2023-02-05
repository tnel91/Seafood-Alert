<template>
  <form class="" @submit.prevent="handleSubmit">
    <input type="text" v-model="searchInput" placeholder="Search by name" />
    <button class="" type="submit">Search</button>
  </form>

  <div id="fishBowl" class="container">
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3 col-xl-2"
        v-for="(result, i) in fishes"
        :key="i"
        @click="goToFishDetails(result['Path'])"
      >
        <div class="card">
          <img
            class="img-thumbnail"
            :src="result['Species Illustration Photo'].src"
            :alt="result['Species Illustration Photo'].alt"
          />
          <h3>{{ result['Species Name'] }}</h3>
          <h5>{{ result['Scientific Name'] }}</h5>
        </div>
      </div>
    </div>
  </div>
  <h4>No Results Found</h4>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LandingPage',
  data: () => ({
    searchInput: '',
    fishes: null
  }),

  props: {
    removePath: {
      type: Function
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
      await axios
        .get('https://www.fishwatch.gov/api/species')
        .then((res) => {
          const filteredFishes = res.data.filter((fish) => {
            let searchedName = this.searchInput.toLowerCase()
            let commonName = fish['Species Name'].toLowerCase()
            if (commonName.includes(searchedName)) {
              return fish
            }
          })
          this.fishes = filteredFishes
          const h4 = document.querySelector('h4')
          if (this.fishes.length === 0) {
            h4.style.display = 'block'
          } else {
            h4.style.display = 'none'
          }
        })
        .catch((err) => {
          console.log(err)
        })
      this.searchInput = ''
    }
  },

  async created() {
    await axios
      .get('https://www.fishwatch.gov/api/species')
      .then((res) => {
        this.fishes = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>
h4 {
  display: none;
}
.card {
  background-color: #eee;
  padding: 10px;
  cursor: pointer;
  height: 100%;
  width: 100%;
}
.card:hover {
  background-color: #ddd;
}

form {
  position: fixed;
  top: 80px;
  width: 100%;
  height: 70px;
  z-index: 1;
  background-color: rgb(42, 42, 171);
  display: flex;
  justify-content: center;
  padding: 10px;
}

form input {
  width: 50%;
  height: 100%;
  font-size: 1.5rem;
  padding: 0 10px;
}

#fishBowl {
  margin-top: 80px;
}
</style>
