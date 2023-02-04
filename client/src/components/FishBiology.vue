<template>
  <div id="bio-info" class="row">
    <div
      class="col-12 p-0"
      v-for="(section, i) in sections"
      :key="i"
      @click="toggleSection(i)"
    >
      <p v-if="section.content" :name="section.slotName">
        {{ section.slotName }}
      </p>
      <div class="content" v-if="section.isActive">
        <div v-html="section.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
// Any Imports
export default {
  name: 'FishBiology',
  props: {
    fish: Object
  },
  data: () => ({
    sections: null
  }),
  methods: {
    toggleSection(i) {
      console.log('toggleSection', i)
      this.sections[i].isActive = !this.sections[i].isActive
    }
  },
  created() {
    this.sections = [
      {
        content: this.fish['Physical Description'],
        slotName: 'physical-description',
        isActive: false
      },
      { content: this.fish['Biology'], slotName: 'biology', isActive: false },
      { content: this.fish['Location'], slotName: 'location', isActive: false },
      { content: this.fish['Research'], slotName: 'research', isActive: false }
    ]
  }
}
</script>

<style>
#bio-info > div {
  flex-direction: column;
  text-align: left;
}

.content {
  width: 100%;
}
</style>
