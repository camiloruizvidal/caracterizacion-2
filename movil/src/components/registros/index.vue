<template>
    <ion-content>
        <h3>{{ dataArray.length }} encuestas realizadas</h3>
        <ion-button @click="nuevaEncuesta" expand="full">Nuevo</ion-button>
        <ion-list>
            <template v-for="(item, index) in dataArray">
                <ion-item
                    :key="index"
                    @click="optionsSelect(item.codigo, item.finalizado, index)"
                    :class="item.finalizo ? 'status-finish' : 'status-pendient'"
                >
                    <ion-avatar slot="start">
                        <img
                            v-if="item.finalizado"
                            src="../../assets/success.png"
                        />
                        <img v-else src="../../assets/danger.png" />
                    </ion-avatar>
                    <ion-lavel>
                        * Codigo de tarjeta familiar {{ item.codigo }}
                        <br />
                        * Personas registradas {{ item.registros.length }}
                        <br />
                        * {{ getDataHeaderFamily(item) }}
                        <br />
                        * {{ item.fechaProximaVisita }}
                        <br />
                    </ion-lavel>
                    <ion-lavel></ion-lavel>
                </ion-item>
            </template>
            <ion-datetime
                style="display: none"
                id="fechas1"
                :ref="'fechas'"
                displayFormat="YYYY-MM-DD"
                month-short-names="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
                display-timezone="utc"
                @ionChange="fecha = $event.target.value"
                :value="fecha"
            ></ion-datetime>
        </ion-list>
    </ion-content>
</template>

<script>
import localdata from "../../services/localdata";
export default {
    data() {
        return {
            codigo_finish: null,
            fecha: "",
            idx: -1,
            dataArray: [],
        };
    },
    watch: {
        fecha: function (fecha) {
            let resultado = JSON.parse(localdata.getItem("encuestas"));
            let usuario = JSON.parse(localdata.getItem("usuario"));
            let idx = resultado.findIndex((user) => user.id === usuario.id);
            this.dataArray[this.idx].fechaProximaVisita = fecha;
            this.dataArray[this.idx].finalizado = true;
            resultado[idx].encuestas = this.dataArray;
            localdata.setItem("encuestas", JSON.stringify(resultado));

            this.$forceUpdate();
        },
    },
    methods: {
        getDataHeaderFamily(item) {
            const cabezaFamilia = item.registros.find(
                (registro) => registro.persona.cabeza_familia
            );
            if (cabezaFamilia) {
                return `${cabezaFamilia.persona.nombre_primero} ${cabezaFamilia.persona.apellido_primero}: ${cabezaFamilia.persona.documento}`;
            } else {
                return "No hay cabeza de familia registrado";
            }
        },

        registrarPacientes(codigo) {
            this.$router.push({name: "personasNew", params: {codigo: codigo}});
        },
        finalizarEncuesta(codigo) {},
        async optionsSelect(codigo, finalizo, idx) {
            if (!finalizo) {
                let me = this;
                const alert = await this.$ionic.alertController.create({
                    header: "Opciones",
                    message: "Desea seguir o finalizar la encuesta.",
                    buttons: [
                        {text: "", handler: (blah) => {}},
                        {
                            text: "Adicionar",
                            handler: (blah) => {
                                me.registrarPacientes(codigo);
                            },
                        },
                        {
                            text: "Finalizar",
                            handler: () => {
                                me.idx = idx;
                                me.codigo_finish = codigo;
                                me.$refs.fechas.open();
                            },
                        },
                    ],
                });
                return alert.present();
            }
        },
        loadData() {
            try {
                let resultado = JSON.parse(localdata.getItem("encuestas"));
                let usuario = JSON.parse(localdata.getItem("usuario"));
                this.idx = resultado.findIndex(
                    (user) => user.id === usuario.id
                );
                this.dataArray = resultado[this.idx].encuestas;
            } catch (error) {
                //console.warn('no data')
            }
        },
        nuevaEncuesta() {
            this.$router.push({name: "registrosNew"});
        },
    },
    mounted() {
        this.loadData();
    },
};
</script>

<style>
.status-finish {
    background-color: green !important;
}
.status-pendient {
    background-color: red !important;
}
</style>
