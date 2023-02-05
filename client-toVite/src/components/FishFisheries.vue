<template>
  <div id="fish-info" class="row">
    <div class="col-12 col-md-6">
      <h5>Fishing Rate</h5>
      <p>{{ fish['Fishing Rate'] }}</p>
    </div>

    <div class="col-12 col-md-6">
      <h5>Habitat Impacts</h5>
      <p>{{ fish['Habitat Impacts'] }}</p>
    </div>

    <div class="col-12 col-sm-6 col-md-4">
      <h5>Population</h5>
      <p>{{ fish['Population'] }}</p>
    </div>

    <div class="col-12 col-sm-6 col-md-4">
      <h5>Availability</h5>
      <div v-html="fish['Availability']"></div>
    </div>

    <div class="col-12 col-sm-12 col-md-4">
      <h5>Bycatch</h5>
      <p>{{ fish['Bycatch'] }}</p>
    </div>

    <button
      class="col-12 p-2 m-2 btn btn-primary btn-lg btn-block flex-column"
      v-for="(section, i) in sections"
      :key="i"
      @click="toggleSection(i)"
    >
      <h4
        v-if="section.content"
        :name="section.slotName"
        class="text-uppercase"
      >
        <b> {{ section.slotName }} </b>
      </h4>
      <div class="content" v-if="section.isActive">
        <div v-html="section.content"></div>
      </div>
    </button>
  </div>
</template>

<script>
// Any Imports
export default {
  name: 'FishFisheries',
  data: () => ({
    sections: null
  }),
  props: {
    fish: Object,
    changeLinkTarget: Function
  },

  methods: {
    toggleSection(i) {
      this.sections[i].isActive = !this.sections[i].isActive
      this.changeLinkTarget()
    }
  },

  created() {
    this.sections = [
      {
        content: this.fish['Fishery Management'],
        slotName: 'fishery-management',
        isActive: false
      },
      { content: this.fish['Harvest'], slotName: 'harvest', isActive: false },
      {
        content: this.fish['Population Status'],
        slotName: 'population status',
        isActive: false
      },
      {
        content: this.fish['Quote'],
        slotName: 'What NOAA says',
        isActive: true
      },
      {
        content: this.fish['Animal Health'],
        slotName: 'animal health',
        isActive: false
      },
      {
        content: this.fish['Management'],
        slotName: 'management',
        isActive: false
      }
    ]
  }
}
</script>

<style>
#fish-info > div {
  background-color: #eee;
  border: 1px solid #ddd;
  flex-direction: column;
}
</style>
