<template>
  <div class="add-auto">
    <h1>Add Auto</h1>
    <form action="add-auto">
      <label for="marca">Marc</label>
      <select name="marca" id="marca" v-model="parameters.Marc">
        <option value="" hidden></option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
      </select>
      <label for="model">Model</label>
      <select name="model" id="model" v-model="parameters.Model">
        <option value="" hidden></option>
        <option value="E 30">E 30</option>
        <option value="E 34">E 34</option>
        <option value="190">190</option>
        <option value="E Class">E Class</option>
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
      type: 'autoturisme'
    };
  },
  computed: {
      ...mapActions(['POST_CAR_API']),
      ...mapGetters(['CARS'])
  },
  methods: {
    getParam() {
        console.log(this.parameters)
    },
    addCar(payload) {
        payload.id = Date.now()
        this.$store.dispatch('POST_CAR_API', payload)
        window.location.href = '/vehicles/' + this.type + '/' + payload.id
    }
  }
};
</script>