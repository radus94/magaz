<template>
  <div class="search">
    <input type="text" v-model="search"/>
    <button>search</button>
    <router-link class="add-btn" to="/add-auto">ADD</router-link>
    <div class="search-result" v-if="carsData.length || truckData.length">
      <h5>Result:</h5>
      <div class="search-in-car" v-if="carsData.length">
        Autoturisme: {{carsData.length}}
      </div>
      <div class="search-in-car" v-if="truckData.length">
        Camioane: {{truckData.length}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: '',
      carsData: [],
      truckData: []
    }
  },
  computed: {
    ...mapGetters(['CARS', 'TRUCK']),
    fullName: () => (marc, model) => {
      console.log()
      if (marc.length <= 3) {
        return marc.toUpperCase() + " " + model;
      } else {
        return marc + " " + model;
      }
    }
  },
  methods: {
    getIfExist(array, search) {
      return array.filter(item => {
        if (search != '') {
        if(search.toLowerCase() === this.fullName(item.Marc, item.Model).toLowerCase() || 
        this.fullName(item.Marc, item.Model).toLowerCase().includes(search.toLowerCase())) {
          return item
        }
        }
      })
    },
    getSearchedData(type, search) {
      if(type === 'autoturisme'){
        this.carsData = this.getIfExist(this.CARS, search)
      } else if (type === 'camioane') {
        this.truckData = this.getIfExist(this.TRUCK, search)
        console.log(this.truckData)
      }
    }
  },
  watch: {
    search: function (newVal) {
      this.getSearchedData('autoturisme',newVal)
      this.getSearchedData('camioane',newVal)
    }
  }
}
</script>

<style lang="scss">
.search {
  margin-top: 10px;
  input,
  button {
    height: 30px;
  }
  input {
    width: 70%;
  }
  button {
    width: 20%;
  }
  .add-btn {
    width: 10%;
    display: inline-block;
    border: 1px solid black;
    border-radius: 5px;
    padding: 4px 0 5px 0;
    background-color:teal;
    color:#fff;
    text-decoration: none;
    text-align: center;
  }
}
</style>