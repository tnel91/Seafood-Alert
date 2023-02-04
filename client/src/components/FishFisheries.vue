<template>
  <div>
    <p class="">{{ fish['Fishing Rate'] }}</p>
  </div>

  <div class="">
    <div class="" v-html="fish['Location']"></div>
  </div>

  <div class="">
    <div class="" v-html="fish['Habitat']"></div>
  </div>

  <div class="col-12 col-md-6">
    <p class="">{{ fish['Population'] }}</p>
  </div>

  <div
    class="border p-3 mb-3 container"
    v-html="fish['Population Status']"
  ></div>

  <div class="col-12">
    <p class="">{{ fish['Habitat Impacts'] }}</p>
  </div>

  <div class="col-6">
    <div class="" v-html="fish['Availability']"></div>
  </div>

  <div
    class="border p-3 mb-3 container"
    v-html="fish['Fishery Management']"
  ></div>

  <div class="border p-3 mb-3 container" v-html="fish['Harvest']"></div>

  <p class="border p-3 mb-3 container">{{ fish['Bycatch'] }}</p>

  <div class="border p-3 mb-3 container" v-html="fish['Management']"></div>

  <div class="border p-3 mb-3 container" v-html="fish['Animal Health']"></div>
</template>

<script>
// Any Imports
export default {
  name: 'FishFisheries',
  props: {
    fish: Object
  }
}
</script>

<style></style>
