<template>
	<b-col col offset-lg="2" offset-md="2" class="main-content">
		<div class="content">
			<router-view />
		</div>
	</b-col>
</template>
<script></script>
<style>
	@media(max-width:767px) {
		.main-content {
			margin-left: 0;
		}
	}
	.content {
		padding-top: 10px;
		margin-left: 10px;
	}
</style>