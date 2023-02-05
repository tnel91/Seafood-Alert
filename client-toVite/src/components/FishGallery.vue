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

<style>
.img-container {
  max-height: 300px;
  flex-direction: column;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
}

.img-container:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.img-container:hover p {
  display: block;
  position: absolute;
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.5rem;
}

.img-container p {
  display: none;
}
</style>
