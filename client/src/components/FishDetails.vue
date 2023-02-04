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
        <h3 class="border p-3 mb-3">{{ fish['Species Name'] }}</h3>
      </div>

      <div class="col-sm-6 text-center">
        <h5 class="text-center">
          {{ fish['Scientific Name'] }}
        </h5>
      </div>

      <div class="col-sm-6">
        <p class="underline">Other names:</p>
        <div id="aliases" class="" v-html="fish['Species Aliases']"></div>
      </div>

      <div>
        <div
          class="border p-3 mb-3 container"
          v-html="fish['Physical Description']"
        ></div>
      </div>

      <div>
        <div class="border p-3 mb-3 container" v-html="fish['Location']"></div>
      </div>

      <div>
        <div class="border p-3 mb-3 container" v-html="fish['Habitat']"></div>
      </div>

      <div>
        <p class="border p-3 mb-3">{{ fish['Population'] }}</p>
      </div>

      <div>
        <p class="border p-3 mb-3">{{ fish['Habitat Impacts'] }}</p>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-3"
            v-for="(image, i) in fish['Image Gallery']"
            :key="i"
          >
            <img class="img-fluid" :src="image.src" :alt="image.title" />
            <p class="text-center">{{ image['title'] }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="border p-3 mb-3 container"
          v-html="fish['Availability']"
        ></div>
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
#details {
  /* margin-top: 100px; */
}

.underline {
  text-decoration: underline;
  margin: 0;
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
</style>
