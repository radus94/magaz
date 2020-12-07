<template>
  <div class="vehicles">
    <h2>
      {{
        $route.params.name.replace(/^./, $route.params.name[0].toUpperCase())
      }}
    </h2>

    <RigthFilters
      :getOption="this.$route.params.name"
      v-if="showFilters"
      @hideFilterBox="hideFilterBox"
      @getFilters="getSortedCars"
    />

    <CarBox :dataCars="filtredCars" />

    <ShowFilterButton class="show-btn" v-if="showBtnFilter" @showFilterBox="showFiltersFunc" @resetFilters="resetFilters" />

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarBox from "../components/CarBox";
import RigthFilters from "../components/RightFilters";
import ShowFilterButton from "../components/ShowFilterButton";

export default {
  name: "Vehicles",
  components: {
    CarBox,
    RigthFilters,
    ShowFilterButton,

  },
  data() {
    return {
      sortedCars: [],
      filters: [],
      showFilters: false,
      showBtnFilter: true
    };
  },
  computed: {
    ...mapGetters(["CARS", "TRUCK"]),
    fullName: () => (marc, model) => {
      if (marc.length <= 3) {
        return marc.toUpperCase() + " " + model;
      } else {
        return marc + " " + model;
      }
    },
    filtredCars() {
      if (this.sortedCars.length) {
        return this.sortedCars;
      } else {
        return this.getPageParam();
      }
    },
    filteringCars() {
      return this.getPageParam()
        .filter(item => {
          if (
            this.filters.selectedCar.includes(item.Marc.toLowerCase()) ||
            this.filters.selectedCar.includes(item.Model.toLowerCase())
          ) {
            return item;
          } else if (this.filters.selectedCar.length === 0) {
            return item;
          }
        })
        .filter(item => {
          if (this.filters.minPrice >= 0 && this.filters.maxPrice != 0) {
            return (
              Number(item.Price) >= Number(this.filters.minPrice) &&
              Number(item.Price) <= Number(this.filters.maxPrice)
            );
          } else if (
            this.filters.minPrice >= 0 &&
            this.filters.maxPrice === 0
          ) {
            return this.filters.minPrice <= item.Price;
          } else {
            return item;
          }
        });
    }
  },
  methods: {
    getPageParam() {
      if (this.$route.params.name === "autoturisme") {
        return this.CARS;
      } else if (this.$route.params.name === "camioane") {
        return this.TRUCK;
      }
    },
    getSortedCars(data) {
      this.filters = data;
      this.sortedCars = this.filteringCars;
    },
    showFiltersFunc(data) {
      this.showFilters = data;
      this.showBtnFilter = false;
    },
    hideFilterBox(data) {
      this.showFilters = data;
      this.showBtnFilter = true;
    },
    resetFilters() {
      this.filters = {
        selectedCar: [],
        minPrice: 0,
        maxPrice: 0
      }
      this.getSortedCars(this.filters)
    }
  }
};
</script>

<style lang="scss">
.vehicles {
  .show-btn {
    
  }
  .reset-btn {

  }
}
</style>