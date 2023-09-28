<template>
    <div>
        <!-- Moscas -->
        <ion-item>
            <ion-checkbox
                :checked="form.moscas"
                @ionChange="form.moscas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label>Moscas</ion-label>
        </ion-item>

        <!-- Pulgas -->
        <ion-item>
            <ion-checkbox
                :checked="form.pulgas"
                @ionChange="form.pulgas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label>Pulgas</ion-label>
        </ion-item>

        <!-- Garrapatas -->
        <ion-item>
            <ion-checkbox
                :checked="form.garrapatas"
                @ionChange="form.garrapatas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label>Garrapatas</ion-label>
        </ion-item>

        <!-- Cinches -->
        <ion-item>
            <ion-checkbox
                :checked="form.cinches"
                @ionChange="form.cinches = $event.detail.checked"
            ></ion-checkbox>
            <ion-label>Cinches</ion-label>
        </ion-item>

        <!-- Niguas -->
        <ion-item>
            <ion-checkbox
                :checked="form.niguas"
                @ionChange="form.niguas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label>Niguas</ion-label>
        </ion-item>

        <!-- Control de Vectores -->
        <ion-item>
            <ion-label position="stacked">Control de Vectores</ion-label>
            <ion-textarea
                :value="form.control_vectores"
                @input="form.control_vectores = $event.target.value"
                type="text"
            ></ion-textarea>
        </ion-item>

        <!-- Realizó Control de Vectores en Institución -->
        <ion-item>
            <ion-checkbox
                :checked="form.realizo_control_vectores_institucion"
                @ionChange="
                    form.realizo_control_vectores_institucion =
                        $event.detail.checked
                "
            ></ion-checkbox>
            <ion-label position="stacked">Realizó Control de Vectores en Institución</ion-label>
        </ion-item>

        <!-- Focos de Contaminación -->
        <ion-item>
            <ion-label position="stacked">Focos de Contaminación</ion-label>
            <ion-textarea
                :value="form.focos_contaminacion"
                @input="form.focos_contaminacion = $event.target.value"
                type="text"
            ></ion-textarea>
        </ion-item>

        <!-- Carroneros Cerca de la Vivienda -->
        <ion-item>
            <ion-checkbox
                :checked="form.carroneros_serca_vivienda"
                @ionChange="
                    form.carroneros_serca_vivienda = $event.detail.checked
                "
            ></ion-checkbox>
            <ion-label position="stacked">Carroneros Cerca de la Vivienda</ion-label>
        </ion-item>
    </div>
</template>

<script>
export default {
    watch: {
        form: {
            deep: true,
            handler(form) {
                this.$emit("changeData", {form});
            },
        },
    },
    data() {
        return {
            form: {
                moscas: false,
                pulgas: false,
                garrapatas: false,
                cinches: false,
                niguas: false,
                control_vectores: null,
                realizo_control_vectores_institucion: false,
            },
        };
    },
    mounted() {
        this.$emit("changeData", {form: this.form});
    }
};
</script>

<style></style>
