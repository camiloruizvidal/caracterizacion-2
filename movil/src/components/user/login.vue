<template>
    <ion-content>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Login</ion-card-title>
            </ion-card-header>
            <ion-card-content>
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
                <ion-item>
                    <ion-button @click="iniciar" expand="full" :disabled="!isConfigureConection">
                        Iniciar
                    </ion-button>
					<ion-label class="normal-text" color="danger" v-if="!isConfigureConection">
                        Por favor configure primero los datos de conexión.
                    </ion-label>
                </ion-item>
            </ion-card-content>
        </ion-card>
    </ion-content>
</template>

<script>
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
    methods: {
        async iniciar() {
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
                            message: "No se pudo ingresar.",
                            buttons: ["OK"],
                        })
                        .then((a) => a.present());
                }
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
</style>
