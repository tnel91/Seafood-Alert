<template>
  <div id="bio-info" class="row">
    <button
      class="col-12 p-2 m-2 btn btn-primary btn-lg btn-block"
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
  name: 'FishBiology',
  props: {
    fish: Object,
    changeLinkTarget: Function
  },
  data: () => ({
    sections: null
  }),
  methods: {
    toggleSection(i) {
      this.sections[i].isActive = !this.sections[i].isActive
      this.changeLinkTarget()
    }
  },
  created() {
    this.sections = [
      {
        content: this.fish['Physical Description'],
        slotName: 'physical description',
        isActive: false
      },
      { content: this.fish['Biology'], slotName: 'biology', isActive: false },
      { content: this.fish['Location'], slotName: 'location', isActive: false },
      { content: this.fish['Habitat'], slotName: 'habitat', isActive: false },
      { content: this.fish['Research'], slotName: 'research', isActive: false }
    ]
  }
}
</script>

<style>
#bio-info > button,
#fish-info > button {
  flex-direction: column;
  text-align: left;
}

.content {
  width: 100%;
}

a {
  color: #000;
}

a:hover {
  color: #000;
}

a:visited {
  color: #353535;
}
</style>
