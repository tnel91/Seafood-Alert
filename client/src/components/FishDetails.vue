<template>
  <div>
    <h3>{{ fish['Species Name'] }}</h3>
    <h5>{{ fish['Scientific Name'] }}</h5>
    <p>{{ fish['Population'] }}</p>
  </div>
</template>

<script>
export default {
  name: 'FishDetails',
  props: ['fish'],
}
</script>

<style>
</style>
