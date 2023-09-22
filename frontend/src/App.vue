<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
	html,
	body {
		height: 90vh;
	}

	body {
		align-items: center;
		padding-bottom: 40px;
		background-color: #4e73df;
	}
	
	@import './assets/css/all.min.css';
	@import './assets/css/sb-admin-2.min.css';
</style>