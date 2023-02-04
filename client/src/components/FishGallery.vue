<template>
  <div class="">
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
</template>

<script>
// Any Imports
export default {
  name: 'FishGallery',
  props: {
    fish: Object
  }
}
</script>

<style></style>
