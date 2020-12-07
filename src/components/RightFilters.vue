<template>
  <!-- <div class="filters" v-if="isFilterBox"> -->
  <div class="filters">
    <div class="filters-form">

      <h4>Filters</h4>

      <label>Marc or Model</label>
      <treeselect @getSelectedValue="getSelectedValues" :getOption="getOption"/>

      <div class="price">
        <div class="price-item">
          <label for="">Min</label>
          <input type="text" v-model="filters.minPrice" />
        </div>

        <span>></span>

        <div class="price-item">
          <label for="">Max</label>
          <input type="text" v-model="filters.maxPrice" />
        </div>
      </div>
    </div>

    <div class="buttons">
      <button @click="sendFilters(filters)">Filtreaza</button>
      <button @click="hideFilterBox">Close</button>
    </div>
  </div>
</template>

<script>
import treeselect from "./treeselect";

export default {
  props: {
    getOption: {
      type: String,
      required: true 
    }
  },
  components: {
    treeselect
  },
  data() {
    return {
      filters: {
        selectedCar: [],
        minPrice: 0,
        maxPrice: 0
      },
      selectedValues: []
    };
  },
  methods: {
    hideFilterBox() {
      this.$emit("hideFilterBox", false);
    },
    sendFilters() {
      this.$emit("getFilters", this.filters);
      this.$emit("hideFilterBox", false);
    },
    resetFilters() {
      this.filters = {
        selectedCar: [],
        minPrice: 0,
        maxPrice: 0
      };
      this.$emit("getFilters", this.filters);
    },
    getSelectedValues: function(data) {
      if (data) {
        this.filters.selectedCar = data;
      }
    }
  }
};
</script>

<style lang="scss">
.filters {
  z-index: 10;
  background: cadetblue;
  position: absolute;
  width: 20%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  .filters-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    h4 {
      margin: 0 auto;
    }
    .price {
      width: 100%;
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .price-item {
        width: 50%;
        input {
          width: 100%;
        }
      }
      span {
        margin: 0 5px;
      }
    }
  }
  button {
    height: 30px;
  }
}
</style>