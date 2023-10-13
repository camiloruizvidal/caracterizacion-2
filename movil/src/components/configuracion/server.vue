<template>
    <ion-content>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Servidor</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-item>
                    <ion-button @click="borrar()">Borrar todo</ion-button>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">IP o host</ion-label>
                    <ion-input
                        :value="form.server"
                        @input="form.server = $event.target.value"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">contraseña</ion-label>
                    <ion-input
                        :value="form.pass"
                        @input="form.pass = $event.target.value"
                        type="password"
                    ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-button @click="guardar" expand="full">
                        Guardar
                    </ion-button>
                </ion-item>
            </ion-card-content>
        </ion-card>
    </ion-content>
</template>

<script>
import fn from "../../services";
export default {
    data() {
        return {
            form: {
                server: "",
                pass: "",
            },
        };
    },
    methods: {
        borrar() {
            fn.serverDelete();
            this.form = {
                server: "",
                pass: "",
            };
            this.$ionic.alertController
                .create({
                    cssClass: "my-custom-class",
                    header: "Servidor borrado",
                    message:
                        "Se ha borrado la configuración del servidor con éxito.",
                    buttons: ["OK"],
                })
                .then((a) => a.present());
        },
        guardar() {
            if (
                this.form.server != "" &&
                this.form.pass != ""
            ) {
                fn.serverSet(this.form.server, this.form.pass);
                this.$ionic.alertController
                    .create({
                        cssClass: "my-custom-class",
                        header: "Servidor configurado",
                        message:
                            "Se ha guardado la configuración del servidor con éxito.",
                        buttons: ["OK"],
                    })
                    .then((a) => a.present());
            } else {
                this.$ionic.alertController
                    .create({
                        cssClass: "my-custom-class",
                        header: "Error",
                        message: "Debe diligenciar todos los datos.",
                        buttons: ["OK"],
                    })
                    .then((a) => a.present());
            }
        },
    },
    mounted() {
        let server = fn.serverAll();
        if (server === false) {
            fn.serverSet(this.form.server, this.form.pass);
            server = fn.serverAll();
        }
        this.form = server;
    },
};
</script>

<style></style>
