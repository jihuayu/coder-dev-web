<template>
	<router-view></router-view>
</template>

<style>
	html,
	body,
	#app {

		height: 100%;

	}
</style>

<script>
	import Login from './views/Login.vue';

	export default {
		name: 'app',
		components: {
			Login
		}
	}
</script>
