<template>
  <div v-if="fish" class="container my-5">
    <div class="border p-3 mb-3 container">
      <div class="row">
        <div class="col-md-4 p-3">
          <img class="img-fluid" :src="fish['Species Illustration Photo'].src" :alt="fish['Species Illustration Photo'].alt">
        </div>
      </div>
    </div>
    <h3 class="border p-3 mb-3 text-center">{{ fish['Species Name'] }}</h3>
    <h5 class="border p-3 mb-3 text-center">{{ fish['Scientific Name'] }}</h5>
    <p class="border p-3 mb-3">{{ fish['Population'] }}</p>
    <!-- <div class="border p-3 mb-3 container" v-html="fish['Fishery Management']"></div> -->
    <div class="border p-3 mb-3 container" v-html="fish['Habitat']"></div>
    <p class="border p-3 mb-3">{{ fish['Habitat Impacts'] }}</p>

    <div class="container">
      <div class="row">
        <div class="col-3" v-for="(image, i) in fish['Image Gallery']" :key="i">
          <img class="img-fluid" :src=image.src :alt="image.title">
          <p class="text-center">{{ image["title"] }}</p>
        </div>
      </div>
    </div>

    <div class="border p-3 mb-3 container" v-html="fish['Location']"></div>
    <div class="border p-3 mb-3 container" v-html="fish['Management']"></div>
    <div class="border p-3 mb-3 container" v-html="fish['Population Status']"></div>
    <div id="aliases" class="border p-3 mb-3 container" v-html="fish['Species Aliases']"></div>

    <div class="border p-3 mb-3 container" v-html="fish['Animal Health']"></div>
    <div class="border p-3 mb-3 container" v-html="fish['Availability']"></div>
    <div class="border p-3 mb-3 container" v-html="fish['Biology']"></div>
    <p class="border p-3 mb-3 container">{{ fish['Bycatch'] }}</p>
    <p class="border p-3 mb-3 container">{{ fish['Fishing Rate'] }}</p>
    <div class="border p-3 mb-3 container" v-html="fish['Harvest']"></div>
    <div class="border p-3 mb-3 container" v-html="fish['Physical Description']"></div>
    <p class="border p-3 mb-3 container">{{ fish['Quote'] }}</p>
    <div class="border p-3 mb-3 container" v-html="fish['Research']"></div>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'FishDetails',

data: ()=>({
  fish: null
}),

props: {
  removePath: {
    type: Function,
  }
},

methods: {
  stringToHtml(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.innerHTML;
  }
},

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
  #aliases a {
    pointer-events: none;
    cursor: default;
    color: black;
    text-decoration: none;
  }

</style>
