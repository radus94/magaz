import Vue from 'vue'
import Vuex from 'vuex'
import cars from './modules/cars.js'
import truck from './modules/truck.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cars,
        truck
    }
})