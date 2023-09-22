<template>
	<footer class="sticky-footer bg-white">
		<div class="container my-auto">
			<div class="copyright text-center my-auto">
				<span>Copyright &copy; SICP - V2 {{year}}</span>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	data() {
		return {
			year: null
		}
	},
	mounted() {
		this.year = this.nowYear()
	}	
}
</script>