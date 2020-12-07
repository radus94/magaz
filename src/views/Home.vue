<template>
  <div class="home">
    <Search />
    <router-link class="add-btn" to="/add-auto">ADD</router-link>
    <HomeCarTypeBtn />
  </div>
</template>

<script>
import HomeCarTypeBtn from "@/components/HomeCarTypeBtn.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    HomeCarTypeBtn,
    Search,
  },
};
</script>

<style lang="scss">
.home {
  .add-btn {
    display: inline-block;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background-color:teal;
    color:#fff;
  }
}
</style>