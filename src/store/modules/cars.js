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
        }
    },
    mutations: {
        SET_CARS_TO_STATE: (state, cars) => {
            state.cars = cars
        }
    },
    getters: {
        CARS(state) {
            return state.cars
        }
    }
}