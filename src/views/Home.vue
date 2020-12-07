<template>
  <div class="home">
    <Search />
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
