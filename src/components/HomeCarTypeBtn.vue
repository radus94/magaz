<template>
  <div class="home-car-type-btn">
    <router-link
      class="button-item"
      v-for="(item, idx) in buttons"
      :key="idx"
      :to="item.url"
    >
      <span>{{ item.title }}</span>
      <span>{{ item.descrption }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      buttons: [
        {
          title: "Autoturisme",
          descrption: "Tot transportul ce intra in categoria 'B'",
          url: "/vehicles/autoturisme"
        },
        {
          title: "Camiaone",
          descrption: "Tot transportul ce intra in categoria 'C' si 'D'",
          url: "/vehicles/camioane"
        },
        {
          title: "Autobuse/Microbuse",
          descrption: "Tot transportul ce intra in categoria 'C' si 'D'",
          url: "/#"
        },
        {
          title: "Moto",
          descrption: "Tot transportul ce intra in categoria 'A'",
          url: "/#"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["CARS"])
  }
};
</script>

<style lang="scss">
.home-car-type-btn {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  .button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 2);
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px 0;
  }
}
</style>