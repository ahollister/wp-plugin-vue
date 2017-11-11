// The store - Vuex
// This is where we are storing our global state and methods
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// State - https://vuex.vuejs.org/en/state.html
// Defines the Vuex state of our app, and is reactive, updating the view whenever it changes
const state = {
	isLoading: true,
	exampleList: []
}


// Mutations - https://vuex.vuejs.org/en/mutations.html
// Mutations are operations that mutate the state
const mutations = {
	SET_LOADING: (state, { isLoading }) => {
		state.isLoading = isLoading
	},
	SET_EXAMPLE: (state, { exampleList }) => {
		state.exampleList = exampleList
	}
}


// Actions - https://vuex.vuejs.org/en/actions.html
// Actions are functions which commit mutations
const actions = {
	CREATE_EXAMPLE: ({ commit }, { exampleList }) => {
		commit('SET_EXAMPLE', { exampleList: exampleList })
	},
	TOGGLE_LOADING: ({ commit }) => {
		if ( state.isLoading == false ) {
			commit('SET_LOADING', { isLoading: true })
		} else {
			commit('SET_LOADING', { isLoading: false })
		}
	}
}


// A Vuex instance is created by combining the state, the actions, and the mutations.
export default new Vuex.Store({
	state,
	actions,
	mutations
})
