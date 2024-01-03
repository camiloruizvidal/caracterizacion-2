<template>
    <div>
        <ion-card-header>
            <ion-card-title>Login</ion-card-title>
        </ion-card-header>
        <img class="logo" src="../../assets/logo.jpeg" />
        <ion-item>
        <ion-label>Usuario</ion-label>
            <ion-input
                :value="form.login"
                @input="form.login = $event.target.value"
            ></ion-input>
        </ion-item>
        <ion-item>
            <ion-label>Contraseña</ion-label>
            <ion-input
                :value="form.pass"
                @input="form.pass = $event.target.value"
                type="password"
            ></ion-input>
        </ion-item>
        <ion-button @click="iniciar" expand="full" :disabled="!isConfigureConection">
            Iniciar
        </ion-button>
        <router-link to="configurar" class="danger-link" v-if="!isConfigureConection">
            Por favor configure primero los datos de conexión.
        </router-link>
        <router-link  style="text-decoration:none" to="configurar">
            <ion-button expand="full" color="danger">
                <span>Configurar conexión</span>
            </ion-button>
        </router-link>
    </div>
</template>

<script>
import { IonLoading } from '@ionic/vue';
import fn from "../../services/index";
export default {
    data() {
        return {
            form: {
                login: "",
                pass: "",
            },
			isConfigureConection: false,
        };
    },
	components: {
		IonLoading
	},
    methods: {
        async iniciar() {
			return this.$ionic.loadingController
			.create({
				message: 'Iniciando sesión,',
				duration: this.timeout,
			})
			.then(loading => {
				this.iniciarSesion(loading);
				return loading.present()
			})
		},
		async iniciarSesion(loading) {
            try {
                let response = await fn.usuarioLogin(
                    this.form.login,
                    this.form.pass
                );
                if (response) {
                    this.register();
                } else {
                    this.$ionic.alertController
                        .create({
                            cssClass: "my-custom-class",
                            header: "Error",
                            message: "No se pudo ingresar. Usuario o contraseña invalidos.",
                            buttons: ["OK"],
                        })
                        .then((a) => a.present());
                }
				loading.dismiss();
            } catch (error) {
                this.$ionic.alertController
				.create({
					cssClass: "my-custom-class",
					header: "Error",
					message:
						"No se pudo ingresar. (" +
						JSON.stringify(error) +
						")",
					buttons: ["OK"],
				})
				.then((a) => a.present());
				loading.dismiss();
            }
        },
        register() {
            fn.encuestaLoad();
            this.$ionic.alertController
                .create({
                    cssClass: "my-custom-class",
                    header: "Inicio con éxito",
                    message: "Bienvenido al SICP.",
                    buttons: ["OK"],
                })
                .then((a) => a.present());
            this.$router.push({
                name: "registros",
            });
        },
		detectConection() {
			const server = fn.serverAll();
			this.isConfigureConection = !(Array.isArray(server) && server.length === 0);
		}
    },
    mounted() {
        fn.usuarioSesionCerrar();
		this.detectConection();
    },
};
</script>
<style scoped>
.normal-text {
    white-space: normal;
}
.danger-link {
    color: #c20000;
    text-decoration: none;
}
.logo{
    border-radius: 50%;
    max-width: 60%;
    padding-top: 20px;
}

</style>
