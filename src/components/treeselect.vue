<template>
  <div id="app">
    <treeselect v-model="value" :multiple="true" :options="options"  :load-options="loadOptions"  :auto-load-root-options="false"/>
  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
// import { LOAD_ROOT_OPTIONS } from '@riophae/vue-treeselect'

import carOption from "../options/cars.js"
import truckOption from "../options/truck.js"

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: null,
    };
  },
  methods: {
    async loadOptions() {
      if (this.$route.params.name === "autoturisme") {
        this.options = carOption
      } else if (this.$route.params.name === "camioane") {
        this.options = truckOption
      }
    }
  },
  watch: {
      value: function() {
          this.$emit('getSelectedValue', this.value)
      }
  }
};
</script>