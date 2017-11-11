<template>
	<div>
		<div v-if="$store.state.isLoading">Loading...</div>
		<ul class="example-list" v-if="! $store.state.isLoading">
			<li v-for="li in $store.state.exampleList" v-bind:key="li.id">{{li.content}}</li>
		</ul>
		<button v-on:click="changeList">Change list content</button>
		<button v-on:click="toggleLoading">Toggle loading state</button>
	</div>
</template>

<script>
	import store from "../stores/store.js"
	export default {
		name: "example",
		created: function() {
			this.onload()
		},
		methods: {
			onload: function () {
				let exampleList = [ { id: 1, content: 'Example list item 1' }, { id: 2, content: 'Example list item 2' }, { id: 3, content: 'Example list item 3' } ]
				this.$store.dispatch('CREATE_EXAMPLE', { exampleList: exampleList })
				this.$store.commit('SET_LOADING', { isLoading: false })
			},
			changeList: function() {
				this.$store.commit('SET_LOADING', { isLoading: true })
				let exampleList = [ { id: 4, content: 'Example list item 4' }, { id: 5, content: 'Example list item 5' }, { id: 6, content: 'Example list item 6' } ]
				this.$store.dispatch('CREATE_EXAMPLE', { exampleList: exampleList })
				this.$store.commit('SET_LOADING', { isLoading: false });
			},
			toggleLoading: function () {
				this.$store.dispatch('TOGGLE_LOADING')
			}
		}
	}
</script>
