import Axios from 'axios'

export default {
    state: {
        cars: []
    },
    actions: {
        GET_CARS_FROM_API({commit}) {
            return Axios('http://localhost:3000/cars', {
                method: "GET"
            })
            .then((response) => {
                commit('SET_CARS_TO_STATE', response.data)
                return response.data
            })
            .catch((error) => {
                return error
            })
        },
        POST_CAR_API({commit}, payload) {
            Axios.post('http://localhost:3000/cars', payload)
            .then((response) => {
                commit('ADD_CAR_TO_STATE', response.data)
            })
        }
    },
    mutations: {
        SET_CARS_TO_STATE: (state, cars) => {
            state.cars = cars
        },
        ADD_CAR_TO_STATE: (state, car) => {
            state.cars = car
        }
    },
    getters: {
        CARS(state) {
            return state.cars
        }
    }
}