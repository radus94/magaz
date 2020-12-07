<template>
  <div class="car-box">
    <router-link class="cars-item" v-for="item in dataCars" :key="item.id" :to="`/vehicles/${typeVeh}/${item.id }`">
      <img :src="require('@/assets/image/' + item.Image)" alt="" />
      <div class="car-item-info">
        <span>{{ fullName(item.Marc, item.Model) }} </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CarBox",
  props: {
    dataCars: {
      type: Array
    }
  },
  data() {
    return {
      typeVeh: this.$route.params.name
    };
  },
  computed: {
    ...mapGetters(["CARS"]),
    fullName: () => (marc, model) => {
      console.log()
      if (marc.length <= 3) {
        return marc.toUpperCase() + " " + model;
      } else {
        return marc + " " + model;
      }
    }
  },
};
</script>

<style lang="scss">
.car-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .cars-item {
    width: calc(100% / 5);
    border: 1px solid black;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 170px;
    }
  }
}
</style>