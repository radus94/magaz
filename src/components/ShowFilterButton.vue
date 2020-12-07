<template>
  <div class="show-filter-btn">
    <div class="first" @click="hideFilterBtn">
    <span>Filters</span>
    </div>    
    
    <div class="second" @click="resetFilterBtn">
      <a class="reset-btn">Reset</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hideFilterBtn() {
      this.$emit("showFilterBox", true);
    },
    resetFilterBtn() {
      this.$emit("resetFilters", true);
    }
  }
};
</script>

<style lang="scss">
.show-filter-btn {
  z-index: 10;
  position: absolute;
  right: 10%;
  bottom: 15%;
  background-color: black;
  width: 80px;
  height: 80px;
  .first {
    z-index: 11;
    position: absolute;
    background-color: whitesmoke;
    width: 80px;
    height: 80px;

  }
  .second {
    position: absolute;
    background-color: wheat;
    width: 50px;
    height: 80px;
  }
  .second:hover, .first:hover + .second {
    right: -50px;
  }
}
</style>