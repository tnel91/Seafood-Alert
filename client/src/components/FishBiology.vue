<template>
  <div class="">
    <div class="" v-html="fish['Physical Description']"></div>
  </div>

  <div>
    <div class="border p-3 mb-3 container" v-html="fish['Biology']"></div>
  </div>
</template>

<script>
// Any Imports
export default {
  name: 'FishBiology',
  props: {
    fish: Object
  }
}
</script>

<style></style>
