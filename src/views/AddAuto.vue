<template>
  <div class="add-auto">
    <h1>Add Auto</h1>
    <form class="add-auto-form" action="add-auto">
      <!-- <input type="file"  name="" id=""> -->
      <label for="marca">Marc</label>
      <select name="marca" id="marca" v-model="parameters.Marc">
        <option value="" hidden></option>
        <option v-for="(item, id) in getMarcKey()" :key="id" :value="item">{{capitalize(item)}}</option>
      </select>
      <label for="model">Model</label>
      <select name="model" id="model" v-model="parameters.Model">
        <option value="" hidden></option>
        <option v-for="(item, id) in marcs[parameters.Marc]" :key="id" :value="item" >{{capitalize(item)}}</option>
      </select>
      <label for="year">An</label>
      <input type="text" name="year" id="year" v-model="parameters.Year"/>
      <label for="price">Pret</label>
      <input type="text" name="price" id="price" v-model.number="parameters.Price"/>
      <label for="origin">Iregistrata</label>
      <input type="text" name="origin" id="origin" v-model="parameters.Origin"/>
    </form>
    <button @click.prevent="addCar(parameters)">POST</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import marcsJosn from '../marc/marc.json'

export default {
  data() {
    return {
      parameters: {
        id: 0,
        Marc: "",
        Model: "",
        Miles_per_Gallon: 0,
        Cylinders: 0,
        Displacement: 0,
        Horsepower: 0,
        Weight_in_lbs: 0,
        Acceleration: 0,
        Year: "",
        Origin: "",
        Image: "no-image.png",
        Price: 0
      },
      type: 'autoturisme',
      marcs: marcsJosn,
    };
  },
  computed: {
      ...mapActions(['POST_CAR_API']),
      ...mapGetters(['CARS'])
  },
  methods: {
    capitalize(item) {
        return item.charAt(0).toUpperCase() + item.slice(1)
    },
    getMarcKey(){
        return Object.keys(this.marcs)
    },
    addCar(payload) {
        payload.id = Date.now()
        this.$store.dispatch('POST_CAR_API', payload)
        window.location.href = '/vehicles/' + this.type + '/' + payload.id
    }
  }
};
</script>

<style lang="scss">
.add-auto {
    width: 50%;
    margin: 0 auto;
    .add-auto-form {
        display: flex;
        flex-direction: column;
        input, select {
            height: 30px;
        }
        label {
            margin-top: 5px;
        }
    }
    button {
            width: 100%;
            height: 30px;
            margin-top: 10px;
        }
}
</style>