import Axios from 'axios'

export default {
    state: {
        truck: []
    },
    actions: {
        GET_TRUCK_FROM_API({ commit }) {
            return Axios('http://localhost:3000/truck', {
                method: "GET"
            })
                .then((response) => {
                    commit('SET_TRUCK_TO_STATE', response.data)
                    return response.data
                })
                .catch((error) => {
                    return error
                })
        }
    },
    mutations: {
        SET_TRUCK_TO_STATE: (state, truck) => {
            state.truck = truck
        }
    },
    getters: {
        TRUCK(state) {
            return state.truck
        }
    }
}