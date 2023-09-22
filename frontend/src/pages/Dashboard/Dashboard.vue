<template>
	<div>
		<b-card title="Caracterizacion">
			<b-card-text>
				<h2>Sistema para caracterizar poblacion</h2>
			</b-card-text>
				<button class="btn btn-success" @click="cargarRegistrosRecibidos">
					Cargar registros del log
				</button>
				<table class="table table-hover" v-if="registerLoaded.length > 0">
					<tr v-for="(item,index) in registerLoaded" :key="index" >
						<td>
							<label :for="`check_${index}`">
								<input
									:name="`check_${index}`"
									:id="`check_${index}`"
									type="checkbox"
									v-model="item.check"
								/>
								registro creado el {{item.created_at}}
							</label>
						</td>
					</tr>
				</table>
				<button
					class="btn btn-primary"
					v-if="registerLoaded.length > 0"
					@click="guardarRegistrosRecibidos"
				>
					Guardar registros
				</button>
				<b-row>
					<b-col cols="12" sm="12" md="12" class="welcome--content">
						<img src="../../assets/img/sicp.jpg" />
						<div class="system-hour">
							<h1>
								HORA DEL SISTEMA
							</h1>
							<section>
								<div class="clock">
									<span id="time" v-html="clock">
										00 : 00 : 00
									</span>
								</div>
							</section>
						</div>
					</b-col>
				</b-row>
		</b-card>
	</div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
	mounted() {
		this.getClock();
	},
	data() {
		return {
			clock: '',
			registerLoaded: [],
		}
	},
	methods: {
		cargarRegistrosRecibidos() {

			Swal.fire({
				title: 'Subiendo archivos desde el log',
				text: 'Por favor espere mientras se cargan',
				timerProgressBar: true,
				didOpen: () => Swal.showLoading()
			})

			this.$http.cargarRegistrosRecibidos()
				.then( response => {
					this.registerLoaded = response.data.data.map(value => {
						value['check'] = true;
						return value;
					})
				})
				.finally(()=>Swal.close())

		},
		async guardarRegistrosRecibidos() {
			Swal.fire({
				title: 'Guardando archivos desde el log',
				text: 'Por favor espere mientras se guardan',
				timerProgressBar: true,
				didOpen: () => Swal.showLoading()
			})

			let me = this;
			await this.registerLoaded.forEach(async value => {
				if(value.check) {
					await me.$http.guardarRegistrosRecibidos(value.value)
				}
			});
			Swal.close()

		},
		getClock() {
			let me = this;
			setInterval(function() {

				let time = new Date();
				let hours = time.getHours();
				let minutes = time.getMinutes();
				let seconds = time.getSeconds();

				minutes = minutes < 10 ? `0${minutes}` : minutes;
				seconds = seconds < 10 ? `0${seconds}` : seconds;
				hours = hours < 10 ? `0${hours}` : hours;

				me.clock = `${hours} : ${minutes} : ${seconds}`;

			}, 1000);
		}
	},
}

</script>
<style>
	img {
		width: 40%;
	margin-bottom: 25px;
	}

	.welcome--content {
		display: block;
	text-align: center;
	}

	section {
		/*position: fixed;*/
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.clock {
		display: inline-block;
		color: #333;
		padding: 30px;
		font-size: 40px;
		/*border-radius: 4px;
		border: 4px solid #cad3dc;
		box-shadow: -8px -8px 15px rgba(255,255,255,0.5);*/
	}

</style>