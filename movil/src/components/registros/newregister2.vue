<template>
    <div>
        <!-- Ingresos Mensuales Vivienda -->
        <ion-item>
            <ion-label position="stacked">
                Ingresos Mensuales Vivienda
            </ion-label>
            <ion-input
                :value="form.ingresos_mensuales_vivienda"
                @input="form.ingresos_mensuales_vivienda = $event.target.value"
                type="number"
            ></ion-input>
        </ion-item>

        <!-- Alcantarillado -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.alcantarillado"
                @ionChange="form.alcantarillado = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Alcantarillado</ion-label>
        </ion-item>

        <!-- Gas -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.gas"
                @ionChange="form.gas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Gas</ion-label>
        </ion-item>

        <!-- Actividad Económica -->
        <ion-item>
            <ion-label position="stacked">Actividad Económica</ion-label>
            <ion-input
                :value="form.actividad_economica"
                @input="form.actividad_economica = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Años de Construcción -->
        <ion-item>
            <ion-label position="stacked">Años de Construcción</ion-label>
            <ion-input
                :value="form.anos_construccion"
                @input="form.anos_construccion = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Iluminación Interior -->
        <ion-item>
            <ion-label position="stacked">Iluminación Interior</ion-label>
            <ion-input
                :value="form.iluminacion_interior"
                @input="form.iluminacion_interior = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Humo Interior -->
        <ion-item>
            <ion-label position="stacked">Humo Interior</ion-label>
            <ion-input
                :value="form.humo_interior"
                @input="form.humo_interior = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Tratamiento de Agua -->
        <ion-item>
            <ion-label position="stacked">Tratamiento de Agua</ion-label>
            <ion-input
                :value="form.tratamiento_agua"
                @input="form.tratamiento_agua = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Qué Hace con Residuos Orgánicos -->
        <ion-item>
            <ion-label position="stacked">
                Qué Hace con Residuos Orgánicos
            </ion-label>
            <ion-input
                :value="form.que_hace_res_organicos"
                @input="form.que_hace_res_organicos = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Qué Hace con Residuos Peligrosos -->
        <ion-item>
            <ion-label position="stacked">
                Qué Hace con Residuos Peligrosos
            </ion-label>
            <ion-input
                :value="form.que_hace_res_peligrosos"
                @input="form.que_hace_res_peligrosos = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Afectaciones Externas -->
        <ion-item>
            <ion-label position="stacked">Afectaciones Externas</ion-label>
            <ion-input
                :value="form.afectaciones_externas"
                @input="form.afectaciones_externas = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Observa Afectación -->
        <ion-item>
            <ion-label position="stacked">Observa Afectación</ion-label>
            <ion-input
                :value="form.observa_afectacion"
                @input="form.observa_afectacion = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Kiosko Digital -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.kiosko_digital"
                @ionChange="form.kiosko_digital = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Kiosko Digital</ion-label>
        </ion-item>

        <!-- Zonas Deportivas -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.zonas_deportivas"
                @ionChange="form.zonas_deportivas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Zonas Deportivas</ion-label>
        </ion-item>

        <!-- Parque Recreativo -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.parque_recreativo"
                @ionChange="form.parque_recreativo = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Parque Recreativo</ion-label>
        </ion-item>

        <!-- Gimnasio -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.gimnasio"
                @ionChange="form.gimnasio = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Gimnasio</ion-label>
        </ion-item>

        <!-- Salón Comunal -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.salon_comunal"
                @ionChange="form.salon_comunal = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Salón Comunal</ion-label>
        </ion-item>

        <!-- Escuela -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.escuela"
                @ionChange="form.escuela = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Escuela</ion-label>
        </ion-item>

        <!-- Colegio -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.colegio"
                @ionChange="form.colegio = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Colegio</ion-label>
        </ion-item>

        <!-- Iglesia -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.iglesia"
                @ionChange="form.iglesia = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Iglesia</ion-label>
        </ion-item>

        <!-- Polideportivo -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.polideportivo"
                @ionChange="form.polideportivo = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Polideportivo</ion-label>
        </ion-item>

        <!-- Escuela Deportiva -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.escuela_deportiva"
                @ionChange="form.escuela_deportiva = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Escuela Deportiva</ion-label>
        </ion-item>

        <!-- Escuela Cultural -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.escuela_cultural"
                @ionChange="form.escuela_cultural = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Escuela Cultural</ion-label>
        </ion-item>

        <!-- Señal de Radio -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.senal_radio"
                @ionChange="form.senal_radio = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Señal de Radio</ion-label>
        </ion-item>

        <!-- Señal de TV -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.senal_tv"
                @ionChange="form.senal_tv = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Señal de TV</ion-label>
        </ion-item>

        <!-- Telefonía Fija -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.telefonia_fija"
                @ionChange="form.telefonia_fija = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Telefonía Fija</ion-label>
        </ion-item>

        <!-- Telefonía Celular -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.telefonia_celular"
                @ionChange="form.telefonia_celular = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Telefonía Celular</ion-label>
        </ion-item>

        <!-- Internet -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.internet"
                @ionChange="form.internet = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Internet</ion-label>
        </ion-item>

        <!-- Computador -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.computador"
                @ionChange="form.computador = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Computador</ion-label>
        </ion-item>

        <!-- Celular -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.celular"
                @ionChange="form.celular = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Celular</ion-label>
        </ion-item>

        <!-- Tablet -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.tablet"
                @ionChange="form.tablet = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Tablet</ion-label>
        </ion-item>

        <!-- Televisor -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.telivisor"
                @ionChange="form.telivisor = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Televisor</ion-label>
        </ion-item>

        <!-- Radio -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.radio"
                @ionChange="form.radio = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Radio</ion-label>
        </ion-item>

        <!-- Videojuegos -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.videojuegos"
                @ionChange="form.videojuegos = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Videojuegos</ion-label>
        </ion-item>

        <!-- Tipo de Vía -->
        <ion-item>
            <ion-label position="stacked">Tipo de Vía</ion-label>
            <ion-input
                :value="form.tipo_via"
                @input="form.tipo_via = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Consumo de Fruta y Verdura -->
        <ion-item>
            <ion-label position="stacked">Consumo de Fruta y Verdura</ion-label>
            <ion-input
                :value="form.consumo_fruta_verdura"
                @input="form.consumo_fruta_verdura = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Consumo de Proteína -->
        <ion-item>
            <ion-label position="stacked">Consumo de Proteína</ion-label>
            <ion-input
                :value="form.consumo_proteina"
                @input="form.consumo_proteina = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Por qué no Consume -->
        <ion-item>
            <ion-label position="stacked">Por qué no Consume</ion-label>
            <ion-input
                :value="form.porque_noconsume"
                @input="form.porque_noconsume = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Tiene Huerta -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.tien_huerta"
                @ionChange="form.tien_huerta = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Tiene Huerta</ion-label>
        </ion-item>

        <!-- Frutas -->
        <ion-item>
            <ion-label position="stacked">Frutas</ion-label>
            <ion-input
                :value="form.frutas"
                @input="form.frutas = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Verduras y Hortalizas -->
        <ion-item>
            <ion-label position="stacked">Verduras y Hortalizas</ion-label>
            <ion-input
                :value="form.verduras_hotalizas"
                @input="form.verduras_hotalizas = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Raíces y Tubérculos -->
        <ion-item>
            <ion-label position="stacked">Raíces y Tubérculos</ion-label>
            <ion-input
                :value="form.raices_tuberculos"
                @input="form.raices_tuberculos = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Leguminosas -->
        <ion-item>
            <ion-label position="stacked">Leguminosas</ion-label>
            <ion-input
                :value="form.leguminozas"
                @input="form.leguminozas = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Tiene Animales para Consumo -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.tien_animales_consumo"
                @ionChange="form.tien_animales_consumo = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">
                Tiene Animales para Consumo
            </ion-label>
        </ion-item>

        <!-- Aves -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.aves"
                @ionChange="form.aves = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Aves</ion-label>
        </ion-item>

        <!-- Peces -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.peces"
                @ionChange="form.peces = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Peces</ion-label>
        </ion-item>

        <!-- Vacas -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.vacas"
                @ionChange="form.vacas = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Vacas</ion-label>
        </ion-item>

        <!-- Porcinos -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.porcinos"
                @ionChange="form.porcinos = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Porcinos</ion-label>
        </ion-item>

        <!-- Ovinos -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.ovinos"
                @ionChange="form.ovinos = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Ovinos</ion-label>
        </ion-item>

        <!-- Curíes / Conejos -->
        <ion-item>
            <ion-checkbox
                slot="end"
                :checked="form.curies_conejos"
                @ionChange="form.curies_conejos = $event.detail.checked"
            ></ion-checkbox>
            <ion-label position="stacked">Curíes / Conejos</ion-label>
        </ion-item>

        <!-- Otros -->
        <ion-item>
            <ion-label position="stacked">Otros</ion-label>
            <ion-input
                :value="form.otros"
                @input="form.otros = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Habitantes -->
        <ion-item>
            <ion-label position="stacked">Habitantes</ion-label>
            <ion-input
                :value="form.habitantes"
                @input="form.habitantes = $event.target.value"
                type="number"
            ></ion-input>
        </ion-item>

        <!-- Ingresos de Habitantes -->
        <ion-item>
            <ion-label position="stacked">Ingresos de Habitantes</ion-label>
            <ion-input
                :value="form.ingresos_habitantes"
                @input="form.ingresos_habitantes = $event.target.value"
                type="number"
            ></ion-input>
        </ion-item>

        <!-- Clasificación de Pobreza -->
        <ion-item>
            <ion-label position="stacked">Clasificación de Pobreza</ion-label>
            <ion-input
                :value="form.clasificacion_pobreza"
                @input="form.clasificacion_pobreza = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Proyecto de Vivienda -->
        <ion-item>
            <ion-label position="stacked">Proyecto de Vivienda</ion-label>
            <ion-input
                :value="form.proyecto_vivienda"
                @input="form.proyecto_vivienda = $event.target.value"
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Clasificación de Riesgo de Vivienda -->
        <ion-item>
            <ion-label position="stacked">
                Clasificación de Riesgo de Vivienda
            </ion-label>
            <ion-input
                :value="form.clasificacion_riesgo_vivienda"
                @input="
                    form.clasificacion_riesgo_vivienda = $event.target.value
                "
                type="text"
            ></ion-input>
        </ion-item>

        <!-- Clasificación de Saneamiento -->
        <ion-item>
            <ion-label position="stacked">
                Clasificación de Saneamiento
            </ion-label>
            <ion-input
                :value="form.clasificacion_saneamiento"
                @input="form.clasificacion_saneamiento = $event.target.value"
                type="text"
            ></ion-input>
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
                ingresos_mensuales_vivienda: null,
                alcantarillado: false,
                gas: false,
                actividad_economica: null,
                anos_construccion: null,
                iluminacion_interior: null,
                humo_interior: null,
                tratamiento_agua: null,
                que_hace_res_organicos: null,
                que_hace_res_peligrosos: null,
                focos_contaminacion: null,
                carroneros_serca_vivienda: false,
                afectaciones_externas: null,
                observa_afectacion: null,
                kiosko_digital: false,
                zonas_deportivas: false,
                parque_recreativo: false,
                gimnasio: false,
                salon_comunal: false,
                escuela: false,
                colegio: false,
                iglesia: false,
                polideportivo: false,
                escuela_deportiva: false,
                escuela_cultural: false,
                senal_radio: false,
                senal_tv: false,
                telefonia_fija: false,
                telefonia_celular: false,
                internet: false,
                computador: false,
                celular: false,
                tablet: false,
                telivisor: false,
                radio: false,
                videojuegos: false,
                tipo_via: null,
                consumo_fruta_verdura: null,
                consumo_proteina: null,
                porque_noconsume: null,
                tien_huerta: false,
                frutas: null,
                verduras_hotalizas: null,
                raices_tuberculos: null,
                leguminozas: null,
                tien_animales_consumo: false,
                aves: false,
                peces: false,
                vacas: false,
                porcinos: false,
                ovinos: false,
                curies_conejos: false,
                otros: null,
                habitantes: null,
                ingresos_habitantes: null,
                clasificacion_pobreza: null,
                proyecto_vivienda: null,
                clasificacion_riesgo_vivienda: null,
                clasificacion_saneamiento: null,
            },
        };
    },
};
</script>
