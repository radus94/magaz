<template>
  <div class="vehicle-item">
    <img :src="require('@/assets/image/' + getItem[0].Image)" alt="" />
    <h3>{{getItem[0].Marc}}</h3>
    <p>{{ getItem }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VehicleItem",
  data() {
    return {
      typeVeh: this.$attrs.typeVeh,
      id: this.$attrs.id
    };
  },
  computed: {
    ...mapGetters(["CARS", "TRUCK"]),
    getItem() {
      if (this.typeVeh === "autoturisme") {
        return this.CARS.filter(item => {
          if (item.id.toString() === this.id) {
            return item;
          }
        });
      } else if (this.typeVeh === "camioane") {
        return this.TRUCK.filter(item => {
          if (item.id.toString() === this.id) {
            return item;
          }
        });
      } else {
        return "No data";
      }
    }
  }
};
</script>

<style lang="scss">
.vehicle-item {
  img {
    width: 200px;
    height: 150px;
  }
}
</style>