<template>
		<div :id="id"></div>
</template>
<script>
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"

export default {
	props: {
		value: { required: true },
		counter: { require: true }
	},
	watch: {
		counter() {
			this.data = this.value.data ? this.value.data : {labels:[],datasets:[]}
			this.index();
		}
	},
	data() {
		return {
			id: this.value.id ? this.value.id: 'chart',
			title: this.value.title ? this.value.title: 'Chart',
			data: this.value.data ? this.value.data : {labels:[],datasets:[]}
		}
	},
	methods: {
		index() {
			new Chart(`#${this.id}`, {
				title: this.title,
				data: this.data,
				type: 'bar', // or axis-mixed 'bar', 'line', 'scatter', 'pie', 'percentage'
				height: 450,
				colors: ['#7cd6fd', '#743ee2']
			})
		}
	},
	mounted() {
		this.index()
	}
}
</script>