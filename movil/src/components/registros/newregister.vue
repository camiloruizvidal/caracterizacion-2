<template>
    <div>
        <!-- Razon Social IPS -->
        <ion-item>
            <ion-label position="stacked">Razón Social IPS</ion-label>
            <ion-input
                :value="form.razon_social_ips"
                @input="(event) => (form.razon_social_ips = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Lengua Propia -->
        <ion-item>
            <ion-label position="stacked">Lengua Propia</ion-label>
            <ion-input
                :value="form.lengua_propia"
                @input="(event) => (form.lengua_propia = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Tipo de Ocupación -->
        <ion-item>
            <ion-label position="stacked">Tipo de Ocupación</ion-label>
            <ion-input
                :value="form.tipo_ocupacion"
                @input="(event) => (form.tipo_ocupacion = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Salud Mental -->
        <ion-item>
            <ion-label position="stacked">Salud Mental</ion-label>
            <ion-input
                :value="form.salud_mental"
                @input="(event) => (form.salud_mental = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Conocimiento Salud -->
        <ion-item>
            <ion-label position="stacked">Conocimiento Salud</ion-label>
            <ion-input
                :value="form.conocimiento_salud"
                @input="
                    (event) => (form.conocimiento_salud = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Población Vulnerable -->
        <ion-item>
            <ion-label position="stacked">Población Vulnerable</ion-label>
            <ion-input
                :value="form.poblacion_vulnerable"
                @input="
                    (event) => (form.poblacion_vulnerable = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Tipo de Discapacidad -->
        <ion-item>
            <ion-label position="stacked">Tipo de Discapacidad</ion-label>
            <ion-input
                :value="form.tipo_discapacidad"
                @input="
                    (event) => (form.tipo_discapacidad = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Tiene Cuidador -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.tiene_cuidador"
                @ionChange="
                    (event) => (form.tiene_cuidador = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Tiene Cuidador</ion-label>
        </ion-item>

        <!-- Descapacidad Registro Localización Caracteri -->
        <ion-item>
            <ion-label position="stacked">
                Descapacidad Registro Localización Caracteri
            </ion-label>
            <ion-input
                :value="form.descapacidad_registro_localizacion_caracteri"
                @input="
                    (event) =>
                        (form.descapacidad_registro_localizacion_caracteri =
                            event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Presento Tos Expectoración -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.presento_tos_expectoracion"
                @ionChange="
                    (event) =>
                        (form.presento_tos_expectoracion = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Presento Tos Expectoración</ion-label>
        </ion-item>

        <!-- Fuma -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.fuma"
                @ionChange="(event) => (form.fuma = event.detail.checked)"
            ></ion-checkbox>
            <ion-label position="stacked">Fuma</ion-label>
        </ion-item>

        <!-- Hace Cuanto -->
        <ion-item>
            <ion-label position="stacked">Hace Cuanto</ion-label>
            <ion-input
                :value="form.hace_cuanto"
                @input="(event) => (form.hace_cuanto = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Cuantos Cigarrillos Diarios -->
        <ion-item>
            <ion-label position="stacked">
                Cuantos Cigarrillos Diarios
            </ion-label>
            <ion-input
                :value="form.cuantos_cigarrillos_diarios"
                @input="
                    (event) =>
                        (form.cuantos_cigarrillos_diarios = event.target.value)
                "
                type="number"
            ></ion-input>
        </ion-item>

        <!-- Exposición a Químicos -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.expocicion_quimicos"
                @ionChange="
                    (event) => (form.expocicion_quimicos = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Exposición a Químicos</ion-label>
        </ion-item>

        <!-- Exposición a Convulsivos -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.expocicion_convulsivos"
                @ionChange="
                    (event) =>
                        (form.expocicion_convulsivos = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Exposición a Convulsivos</ion-label>
        </ion-item>

        <!-- Religión -->
        <ion-item>
            <ion-label position="stacked">Religión</ion-label>
            <ion-input
                :value="form.religion"
                @input="(event) => (form.religion = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Consumo de Alcohol -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.consumo_alcohol"
                @ionChange="
                    (event) => (form.consumo_alcohol = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Consumo de Alcohol</ion-label>
        </ion-item>

        <!-- Frecuencia de Consumo de Alcohol -->
        <ion-item>
            <ion-label position="stacked">
                Frecuencia de Consumo de Alcohol
            </ion-label>
            <ion-input
                :value="form.frecuancia_consumo_alcohol"
                @input="
                    (event) =>
                        (form.frecuancia_consumo_alcohol = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Hace Cuanto Consume Alcohol -->
        <ion-item>
            <ion-label position="stacked">
                Hace Cuanto Consume Alcohol
            </ion-label>
            <ion-input
                :value="form.hace_cuanto_alcohol"
                @input="
                    (event) => (form.hace_cuanto_alcohol = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Consumo de Sustancias Psicoactivas -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.consumo_sustan_psicoactivas"
                @ionChange="
                    (event) =>
                        (form.consumo_sustan_psicoactivas =
                            event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">
                Consumo de Sustancias Psicoactivas
            </ion-label>
        </ion-item>

        <!-- Sustancias Psicoactivas -->
        <ion-item>
            <ion-label position="stacked">Sustancias Psicoactivas</ion-label>
            <ion-input
                :value="form.sustan_psicoactivas"
                @input="
                    (event) => (form.sustan_psicoactivas = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Frecuencia de Consumo de Sustancias Psicoactivas -->
        <ion-item>
            <ion-label position="stacked">
                Frecuencia de Consumo de Sustancias Psicoactivas
            </ion-label>
            <ion-input
                :value="form.frecuensia_sustan_psicoactivas"
                @input="
                    (event) =>
                        (form.frecuensia_sustan_psicoactivas =
                            event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Hace Cuanto Consume Sustancias Psicoactivas -->
        <ion-item>
            <ion-label position="stacked">
                Hace Cuanto Consume Sustancias Psicoactivas
            </ion-label>
            <ion-input
                :value="form.hace_cuanto_sustan_psicoactivas"
                @input="
                    (event) =>
                        (form.hace_cuanto_sustan_psicoactivas =
                            event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Planificación Familiar -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.planificacion_familiar"
                @ionChange="
                    (event) =>
                        (form.planificacion_familiar = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Planificación Familiar</ion-label>
        </ion-item>

        <!-- Fecha Última Citología -->
        <ion-item>
            <ion-label position="stacked">Fecha Última Citología</ion-label>
            <ion-datetime
                :value="form.fecha_ultima_citologia"
                @ionChange="
                    (event) =>
                        (form.fecha_ultima_citologia = event.detail.value)
                "
                display-format="YYYY-MM-DD"
                placeholder="Seleccione la fecha"
            ></ion-datetime>
        </ion-item>

        <!-- Fecha Última Menstruación -->
        <ion-item>
            <ion-label position="stacked">Fecha Última Menstruación</ion-label>
            <ion-datetime
                :value="form.fecha_ultima_mestruacion"
                @ionChange="
                    (event) =>
                        (form.fecha_ultima_mestruacion = event.detail.value)
                "
                display-format="YYYY-MM-DD"
                placeholder="Seleccione la fecha"
            ></ion-datetime>
        </ion-item>

        <!-- Sufre Enfermedad Crónica -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.sufre_enf_cronica"
                @ionChange="
                    (event) => (form.sufre_enf_cronica = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Sufre Enfermedad Crónica</ion-label>
        </ion-item>

        <!-- Patologías -->
        <ion-item>
            <ion-label position="stacked">Patologías</ion-label>
            <ion-input
                :value="form.patologias"
                @input="(event) => (form.patologias = event.target.value)"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Alimentación y Lactancia -->
        <ion-item>
            <ion-label position="stacked">Alimentación y Lactancia</ion-label>
            <ion-input
                :value="form.alimientacion_lactancia"
                @input="
                    (event) =>
                        (form.alimientacion_lactancia = event.target.value)
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Frecuencia de Cepillado -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.frecu_sepillado"
                @ionChange="
                    (event) => (form.frecu_sepillado = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Frecuencia de Cepillado</ion-label>
        </ion-item>

        <!-- Utiliza Crema Dental -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.utiliza_crema_dental"
                @ionChange="
                    (event) =>
                        (form.utiliza_crema_dental = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Utiliza Crema Dental</ion-label>
        </ion-item>

        <!-- Ingesta de Crema Dental -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.ingesta_crema_dental"
                @ionChange="
                    (event) =>
                        (form.ingesta_crema_dental = event.detail.checked)
                "
            ></ion-checkbox>
            <ion-label position="stacked">Ingesta de Crema Dental</ion-label>
        </ion-item>

        <ion-item>
            <ion-label>Enfermedades de Salud Mental</ion-label>
            <ion-select @ionChange="handleSelectChange">
                <ion-select-option value="ANSIEDAD">ANSIEDAD</ion-select-option>
                <ion-select-option value="DEPRESION">
                    DEPRESION
                </ion-select-option>
                <ion-select-option value="ANSIEDAD SOCIAL">
                    ANSIEDAD SOCIAL
                </ion-select-option>
                <ion-select-option value="CONSUMO DE SUSTANCIAS PSICOACTIVAS">
                    CONSUMO DE SUSTANCIAS PSICOACTIVAS
                </ion-select-option>
                <ion-select-option value="OTRA CUAL">
                    OTRA CUAL
                </ion-select-option>
            </ion-select>
        </ion-item>

        <ion-item v-if="tiene_enfermedades_salud_mental === 'OTRA CUAL'">
            <ion-label position="stacked">Especifique</ion-label>
            <ion-input
                v-model="form.otra_enfermedad"
                @input="handleTextChange"
            ></ion-input>
        </ion-item>

        <ion-item>
            <ion-checkbox
                slot="end"
                @ionChange="
                    form.esta_empleado_actualmente = $event.detail.checked
                "
            ></ion-checkbox>
            <ion-label position="stacked">
                ¿Está empleado actualmente?
            </ion-label>
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
            tiene_enfermedades_salud_mental: "",
            form: {
                esta_empleado_actualmente: false,
                tiene_enfermedades_salud_mental: "",
                razon_social_ips: null,
                lengua_propia: null,
                tipo_ocupacion: null,
                salud_mental: null,
                conocimiento_salud: null,
                poblacion_vulnerable: null,
                tipo_discapacidad: null,
                tiene_cuidador: false,
                descapacidad_registro_localizacion_caracteri: null,
                presento_tos_expectoracion: false,
                fuma: false,
                hace_cuanto: null,
                cuantos_cigarrillos_diarios: null,
                expocicion_quimicos: false,
                expocicion_convulsivos: false,
                religion: null,
                consumo_alcohol: false,
                frecuancia_consumo_alcohol: null,
                hace_cuanto_alcohol: null,
                consumo_sustan_psicoactivas: false,
                sustan_psicoactivas: null,
                frecuensia_sustan_psicoactivas: null,
                hace_cuanto_sustan_psicoactivas: null,
                planificacion_familiar: false,
                fecha_ultima_citologia: null,
                fecha_ultima_mestruacion: null,
                sufre_enf_cronica: false,
                patologias: null,
                alimientacion_lactancia: null,
                frecu_sepillado: false,
                utiliza_crema_dental: false,
                ingesta_crema_dental: false,
            },
        };
    },
    methods: {
        handleSelectChange(event) {
            this.tiene_enfermedades_salud_mental = event.target.value;
        },
        handleTextChange(event) {
            this.form.tiene_enfermedades_salud_mental = event.target.value;
        },
    },
};
</script>
