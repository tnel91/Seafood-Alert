<template>
  <div class="text-center container">
    <div v-if="fish" class="row">
      <div id="illustration" class="col-12">
        <img
          class="img-fluid"
          :src="fish['Species Illustration Photo'].src"
          :alt="fish['Species Illustration Photo'].alt"
        />
      </div>

      <div class="col-12 flex-column">
        <h2 class="mb-3">{{ fish['Species Name'] }}</h2>
        <h5 class="italic mb-3">
          {{ fish['Scientific Name'] }}
        </h5>
        <p class="mb-1"><b>Other names</b></p>
        <div id="aliases" class="" v-html="fish['Species Aliases']"></div>
      </div>

      <div class="col-12 container">
        <button @click="togglePages('FishBiology')" class="col-4">
          Biology
        </button>
        <button @click="togglePages('FishFisheries')" class="col-4">
          Fisheries
        </button>
        <button @click="togglePages('FishGallery')" class="col-4">
          Gallery
        </button>
      </div>

      <div id="FishBiology" class="sect col-12">
        <FishBiology :fish="fish" />
      </div>

      <div id="FishFisheries" class="sect col-12">
        <FishFisheries :fish="fish" />
      </div>

      <div id="FishGallery" class="sect col-12">
        <FishGallery :fish="fish" />
      </div>

      <p class="border p-3 mb-3 container">{{ fish['Quote'] }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FishBiology from './FishBiology.vue'
import FishFisheries from './FishFisheries.vue'
import FishGallery from './FishGallery.vue'

export default {
  name: 'FishDetails',

  components: {
    FishBiology,
    FishFisheries,
    FishGallery
  },

  data: () => ({
    fish: null
  }),

  props: {
    removePath: {
      type: Function
    }
  },

  methods: {
    togglePages(page) {
      const pages = ['FishBiology', 'FishFisheries', 'FishGallery']
      pages.forEach((p) => {
        if (p === page) {
          document.getElementById(p).style.display = 'block'
        } else {
          document.getElementById(p).style.display = 'none'
        }
      })
    },

    stringToHtml(str) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(str, 'text/html')
      return doc.body.innerHTML
    }
  },

  async created() {
    await setTimeout(() => {
      axios
        .get(`https://www.fishwatch.gov/api/species/${this.$route.params.id}`)
        .then((res) => {
          this.fish = res.data[0]
          console.log(res.data[0])
        })
        .catch(() => {
          console.log('ERROR Trying Again...')
          axios
            .get(
              `https://www.fishwatch.gov/api/species/${this.$route.params.id}`
            )
            .then((res) => {
              const oneFish = res.data[0]
              this.fish = oneFish
            })
            .catch((err) => {
              console.log('ERROR')
              console.log(err)
            })
        })
    }, 1)
  }
}
</script>

<style>
.sect {
  display: none;
}

.underline {
  text-decoration: underline;
}

.italic {
  font-style: italic;
}

#aliases a {
  pointer-events: none;
  cursor: default;
  color: black;
  text-decoration: none;
}

#illustration {
  max-height: 300px;
}

#illustration img {
  height: 100%;
}

.img-container {
  max-height: 300px;
  flex-direction: column;
  position: relative;
}

.img-fluid {
  max-height: 100%;
}

.img-container:hover p {
  display: block;
  position: absolute;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
}

.img-container p {
  display: none;
}
</style>
