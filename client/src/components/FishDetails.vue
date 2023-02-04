<template>
  <div id="details" class="text-center container">
    <div v-if="fish" class="row">
      <div id="illustration" class="col-12">
        <img
          class="img-fluid"
          :src="fish['Species Illustration Photo'].src"
          :alt="fish['Species Illustration Photo'].alt"
        />
      </div>

      <div class="col-12">
        <h3 class="p-3 mb-3">{{ fish['Species Name'] }}</h3>
      </div>

      <div class="col-sm-6">
        <span class="mx-2">Scientific Name:</span>
        <h5 class="italic mx-2 mb-0">
          {{ fish['Scientific Name'] }}
        </h5>
      </div>

      <div class="col-sm-6">
        <u class="mx-2">Other names:</u>
        <div id="aliases" class="mx-2" v-html="fish['Species Aliases']"></div>
      </div>

      <div class="col-12">
        <div class="" v-html="fish['Physical Description']"></div>
      </div>

      <div class="col-12">
        <div class="" v-html="fish['Location']"></div>
      </div>

      <div class="col-12 col-md-6">
        <div class="" v-html="fish['Habitat']"></div>
      </div>

      <div class="col-12 col-md-6">
        <p class="">{{ fish['Population'] }}</p>
      </div>

      <div class="col-12">
        <p class="">{{ fish['Habitat Impacts'] }}</p>
      </div>

      <div class="py-0 col-12 container">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 img-container"
            v-for="(image, i) in fish['Image Gallery']"
            :key="i"
          >
            <img class="img-fluid" :src="image.src" :alt="image.title" />
            <p class="text-center">{{ image['title'] }}</p>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="" v-html="fish['Availability']"></div>
      </div>

      <div>
        <div class="border p-3 mb-3 container" v-html="fish['Biology']"></div>
      </div>

      <div>
        <p class="border p-3 mb-3 container">{{ fish['Fishing Rate'] }}</p>
      </div>

      <div>
        <div class="border p-3 mb-3 container" v-html="fish['Research']"></div>
      </div>

      <!-- <div class="border p-3 mb-3 container" v-html="fish['Fishery Management']"></div> -->
      <!-- <div class="border p-3 mb-3 container" v-html="fish['Management']"></div> -->
      <!-- <div class="border p-3 mb-3 container" v-html="fish['Population Status']"></div> -->
      <!-- <div class="border p-3 mb-3 container" v-html="fish['Animal Health']"></div> -->
      <!-- <div class="border p-3 mb-3 container" v-html="fish['Harvest']"></div> -->
      <!-- <p class="border p-3 mb-3 container">{{ fish['Quote'] }}</p> -->
      <!-- <p class="border p-3 mb-3 container">{{ fish['Bycatch'] }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FishDetails',

  data: () => ({
    fish: null
  }),

  props: {
    removePath: {
      type: Function
    }
  },

  methods: {
    stringToHtml(str) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(str, 'text/html')
      return doc.body.innerHTML
    }
  },

  async created() {
    await axios
      .get(`https://www.fishwatch.gov/api/species/${this.$route.params.id}`)
      .then((res) => {
        const oneFish = res.data[0]
        this.fish = oneFish
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>
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
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
}

.img-container p {
  display: none;
}
</style>
