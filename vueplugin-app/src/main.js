import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import store from './stores/store.js'

Vue.use(Vuex)

new Vue({
	el: '#vueplugin-app',
	store,
	render: h => h(App)
})
