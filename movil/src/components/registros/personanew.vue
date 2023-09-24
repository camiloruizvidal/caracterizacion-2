<template>
    <div>
        <h1>Tarjeta familiar No {{ codigo }}</h1>
        <ion-card v-if="estado == 'persona'">
            <ion-card-header>
                <ion-card-title>Datos personales</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked">
                            Cabeza de familia
                        </ion-label>
                        <ion-checkbox
                            @ionChange="
                                form.persona.cabeza_familia =
                                    !form.persona.cabeza_familia
                            "
                            :value="form.persona.cabeza_familia"
                        ></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Genero</ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.genero = $event.target.value
                            "
                            :value="form.persona.genero"
                        >
                            <ion-select-option value="Masculino">
                                Masculino
                            </ion-select-option>
                            <ion-select-option value="Femenino">
                                Femenino
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Familiaridad</ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.familiaridad = $event.target.value
                            "
                            :value="form.persona.familiaridad"
                        >
                            <ion-select-option
                                value="Abuelo"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Abuelo
                            </ion-select-option>
                            <ion-select-option
                                value="Abuela"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Abuela
                            </ion-select-option>
                            <ion-select-option
                                value="Bisnieta"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Bisnieta
                            </ion-select-option>
                            <ion-select-option
                                value="Bisnieto"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Bisnieto
                            </ion-select-option>
                            <ion-select-option
                                value="Esposa"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Esposa
                            </ion-select-option>
                            <ion-select-option
                                value="Esposo"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Esposo
                            </ion-select-option>
                            <ion-select-option
                                value="Hermana"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Hermana
                            </ion-select-option>
                            <ion-select-option
                                value="Hermano"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Hermano
                            </ion-select-option>
                            <ion-select-option
                                value="Hija"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Hija
                            </ion-select-option>
                            <ion-select-option
                                value="Hijo"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Hijo
                            </ion-select-option>
                            <ion-select-option
                                value="Madre"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Madre
                            </ion-select-option>
                            <ion-select-option
                                value="Nieta"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Nieta
                            </ion-select-option>
                            <ion-select-option
                                value="Nieto"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Nieto
                            </ion-select-option>
                            <ion-select-option
                                value="Padre"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Padre
                            </ion-select-option>
                            <ion-select-option
                                value="Sobrina"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Sobrina
                            </ion-select-option>
                            <ion-select-option
                                value="Sobrino"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Sobrino
                            </ion-select-option>
                            <ion-select-option
                                value="Tia"
                                v-if="form.persona.genero == 'Femenino'"
                            >
                                Tia
                            </ion-select-option>
                            <ion-select-option
                                value="Tio"
                                v-if="form.persona.genero == 'Masculino'"
                            >
                                Tio
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Documento</ion-label>
                        <ion-input
                            type="number"
                            @input="
                                form.persona.documento = $event.target.value
                            "
                            :value="form.persona.documento"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Tipo de documento
                        </ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.documento_tipo =
                                    $event.target.value
                            "
                            :value="form.persona.documento_tipo"
                        >
                            <ion-select-option value="ADULTO SIN IDENTIFICAR">
                                ADULTO SIN IDENTIFICAR
                            </ion-select-option>
                            <ion-select-option value="CEDULA DE CIUDADANIA">
                                CEDULA DE CIUDADANIA
                            </ion-select-option>
                            <ion-select-option value="MENOR SIN IDENTIFICAR">
                                MENOR SIN IDENTIFICAR
                            </ion-select-option>
                            <ion-select-option value="TARJETA DE IDENTIDAD">
                                TARJETA DE IDENTIDAD
                            </ion-select-option>
                            <ion-select-option value="REGISTRO CIVIL">
                                REGISTRO CIVIL
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Fecha de nacimiento
                        </ion-label>
                        <ion-datetime
                            displayFormat="YYYY-MM-DD"
                            month-short-names="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
                            display-timezone="utc"
                            @ionChange="
                                form.persona.fecha_nacimiento =
                                    $event.target.value;
                                calcularEdad();
                            "
                            :value="form.persona.fecha_nacimiento"
                        ></ion-datetime>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Edad</ion-label>
                        <br />
                        <i>{{ form.persona.edad }}</i>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Estado civil</ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.estado_civil = $event.target.value
                            "
                            :value="form.persona.estado_civil"
                        >
                            <ion-select-option value="No aplica">
                                No aplica
                            </ion-select-option>
                            <ion-select-option value="Union libre">
                                Union libre
                            </ion-select-option>
                            <ion-select-option value="Casado">
                                Casado
                            </ion-select-option>
                            <ion-select-option value="Divorciado">
                                Divorciado
                            </ion-select-option>
                            <ion-select-option value="Separado">
                                Separado
                            </ion-select-option>
                            <ion-select-option value="Soltero">
                                Soltero
                            </ion-select-option>
                            <ion-select-option value="Viudo">
                                Viudo
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Nivel educativo
                        </ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.nivel_educativo =
                                    $event.target.value
                            "
                            :value="form.persona.nivel_educativo"
                        >
                            <ion-select-option value="Nivel superior">
                                Nivel superior
                            </ion-select-option>
                            <ion-select-option value="No aplica por edad">
                                No aplica por edad
                            </ion-select-option>
                            <ion-select-option value="Analfabeta">
                                Analfabeta
                            </ion-select-option>
                            <ion-select-option value="Sabe leer y escribir">
                                Sabe leer y escribir
                            </ion-select-option>
                            <ion-select-option value="Preescolar">
                                Preescolar
                            </ion-select-option>
                            <ion-select-option value="Primaria Completa">
                                Primaria Completa
                            </ion-select-option>
                            <ion-select-option value="Primaria Incompleta">
                                Primaria Incompleta
                            </ion-select-option>
                            <ion-select-option value="Bachillerato Completo">
                                Bachillerato Completo
                            </ion-select-option>
                            <ion-select-option value="Bachillerato Incompleto">
                                Bachillerato Incompleto
                            </ion-select-option>
                            <ion-select-option value="Técnico">
                                Técnico
                            </ion-select-option>
                            <ion-select-option value="Tecnólogo">
                                Tecnólogo
                            </ion-select-option>
                            <ion-select-option value="Universitario">
                                Universitario
                            </ion-select-option>
                            <ion-select-option value="Posgrado">
                                Posgrado
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Tipo de ocupacion
                        </ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.tipo_ocupacion =
                                    $event.target.value
                            "
                            :value="form.persona.tipo_ocupacion"
                        >
                            <ion-select-option value="No aplica por edad">
                                No aplica por edad
                            </ion-select-option>
                            <ion-select-option value="Nivel superior">
                                Nivel superior
                            </ion-select-option>
                            <ion-select-option value="Analfabeta">
                                Analfabeta
                            </ion-select-option>
                            <ion-select-option value="Sabe leer y escribir">
                                Sabe leer y escribir
                            </ion-select-option>
                            <ion-select-option value="Preescolar">
                                Preescolar
                            </ion-select-option>
                            <ion-select-option value="Primaria Completa">
                                Primaria Completa
                            </ion-select-option>
                            <ion-select-option value="Primaria Incompleta">
                                Primaria Incompleta
                            </ion-select-option>
                            <ion-select-option value="Bachillerato Completo">
                                Bachillerato Completo
                            </ion-select-option>
                            <ion-select-option value="Bachillerato Incompleto">
                                Bachillerato Incompleto
                            </ion-select-option>
                            <ion-select-option value="Técnico">
                                Técnico
                            </ion-select-option>
                            <ion-select-option value="Tecnólogo">
                                Tecnólogo
                            </ion-select-option>
                            <ion-select-option value="Universitario">
                                Universitario
                            </ion-select-option>
                            <ion-select-option value="Posgrado">
                                Posgrado
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Primer nombre</ion-label>
                        <ion-input
                            @input="
                                form.persona.nombre_primero =
                                    $event.target.value
                            "
                            :value="form.persona.nombre_primero"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Segundo nombre</ion-label>
                        <ion-input
                            @input="
                                form.persona.nombre_segundo =
                                    $event.target.value
                            "
                            :value="form.persona.nombre_segundo"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Primer apellido
                        </ion-label>
                        <ion-input
                            @input="
                                form.persona.apellido_primero =
                                    $event.target.value
                            "
                            :value="form.persona.apellido_primero"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Segundo apellido
                        </ion-label>
                        <ion-input
                            @input="
                                form.persona.apellido_segundo =
                                    $event.target.value
                            "
                            :value="form.persona.apellido_segundo"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">EPS</ion-label>
                        <ion-select
                            @ionChange="form.persona.eps = $event.target.value"
                            :value="form.persona.eps"
                        >
                            <ion-select-option value="Ninguno">
                                Ninguno
                            </ion-select-option>
                            <ion-select-option
                                v-for="(item, idx) in arrayEPS"
                                :value="item.id"
                                :key="idx"
                            >
                                {{ item.nombre }}
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Regimen</ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.regimen = $event.target.value
                            "
                            :value="form.persona.regimen"
                        >
                            <ion-select-option value="CONTRIBUTIVO">
                                CONTRIBUTIVO
                            </ion-select-option>
                            <ion-select-option value="DESP CONT">
                                DESP CONT
                            </ion-select-option>
                            <ion-select-option value="DESP SUB">
                                DESP SUB
                            </ion-select-option>
                            <ion-select-option value="DESP VINCU">
                                DESP VINCU
                            </ion-select-option>
                            <ion-select-option value="RE ESPECIAL">
                                RE ESPECIAL
                            </ion-select-option>
                            <ion-select-option value="SUBSIDIADO">
                                SUBSIDIADO
                            </ion-select-option>
                            <ion-select-option value="VINCULADO">
                                VINCULADO
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Grupo poblacional
                        </ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.grupo_poblacional =
                                    $event.target.value
                            "
                            :value="form.persona.grupo_poblacional"
                        >
                            <ion-select-option value="Mestizo">
                                Mestizo
                            </ion-select-option>
                            <ion-select-option value="Afrocolombiano">
                                Afrocolombiano
                            </ion-select-option>
                            <ion-select-option value="Indigena">
                                Indígena
                            </ion-select-option>
                            <ion-select-option value="ROM o gitano">
                                ROM o gitano
                            </ion-select-option>
                            <ion-select-option value="Desplazado">
                                Desplazado
                            </ion-select-option>
                            <ion-select-option value="migrante">
                                migrante
                            </ion-select-option>
                            <ion-select-option value="raizal">
                                raizal
                            </ion-select-option>
                            <ion-select-option value="otro">
                                otro
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item
                        v-if="form.persona.grupo_poblacional == 'Indigena'"
                    >
                        <ion-label position="stacked">
                            A que grupo índigena
                        </ion-label>
                        <ion-input
                            type="text"
                            @input="
                                form.persona.grupo_poblacional_indigena =
                                    $event.target.value
                            "
                            :value="form.persona.grupo_poblacional_indigena"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            ¿Con cuál etnia se identifica?
                        </ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.etnia = $event.target.value
                            "
                            :value="form.persona.etnia"
                        >
                            <ion-select-option value="Mestizo">
                                Mestizo
                            </ion-select-option>
                            <ion-select-option value="Afrocolombiano">
                                Afrocolombiano
                            </ion-select-option>
                            <ion-select-option value="Indigena">
                                Indigena
                            </ion-select-option>
                            <ion-select-option value="ROM o gitano">
                                ROM o gitano
                            </ion-select-option>
                            <ion-select-option value="Raizal">
                                Raizal
                            </ion-select-option>
                            <ion-select-option value="No aplica">
                                No aplica
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Tipo de afiliado
                        </ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.afiliacion_tipo =
                                    $event.target.value
                            "
                            :value="form.persona.afiliacion_tipo"
                        >
                            <ion-select-option value="Beneficiario">
                                Beneficiario
                            </ion-select-option>
                            <ion-select-option value="Cotizante">
                                Cotizante
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Rango</ion-label>
                        <ion-select
                            @ionChange="
                                form.persona.rango = $event.target.value
                            "
                            :value="form.persona.rango"
                        >
                            <ion-select-option value="1">1</ion-select-option>
                            <ion-select-option value="2">2</ion-select-option>
                            <ion-select-option value="3">3</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-list>
                <newregister @changeData="loadNewRegister"></newregister>
                <ion-button @click="enfermedad">
                    <ion-icon name="bug-outline"></ion-icon>
                    Paciente alto costo
                </ion-button>
                <ion-button @click="medicamento">
                    <ion-icon name="bug-outline"></ion-icon>
                    Registrar medicamentos
                </ion-button>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="estado == 'signos_vitales'">
            <ion-card-header>
                <ion-card-title>Signos vitales</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked">
                            Tension arterial sistolica
                        </ion-label>
                        <ion-input
                            type="number"
                            @input="
                                form.signos_vitales_tension_arterial_sistolica =
                                    $event.target.value
                            "
                            :value="
                                form.signos_vitales_tension_arterial_sistolica
                            "
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Tension arterial diastolica
                        </ion-label>
                        <ion-input
                            type="number"
                            @input="
                                form.signos_vitales_tension_arterial_diastolica =
                                    $event.target.value
                            "
                            :value="
                                form.signos_vitales_tension_arterial_diastolica
                            "
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Frecuencia cardias
                        </ion-label>
                        <ion-input
                            type="number"
                            @input="
                                form.signos_vitales_frecuencia_cardias =
                                    $event.target.value
                            "
                            :value="form.signos_vitales_frecuencia_cardias"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Frecuencia respiratoria
                        </ion-label>
                        <ion-input
                            type="number"
                            @input="
                                form.signos_vitales_frecuencia_respiratoria =
                                    $event.target.value
                            "
                            :value="form.signos_vitales_frecuencia_respiratoria"
                        ></ion-input>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-card v-if="estado == 'grupos_riesgo'">
            <ion-card-header>
                <ion-card-title>Grupos de riesgo</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_accidente_y_enfermedad_laboral !=
                                    form.grupos_riesgo_accidente_y_enfermedad_laboral
                            "
                            :value="
                                form.grupos_riesgo_accidente_y_enfermedad_laboral
                            "
                        />
                        <ion-label>accidente y enfermedad laboral</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_alteraciones_nutricionales !=
                                    form.grupos_riesgo_alteraciones_nutricionales
                            "
                            :value="
                                form.grupos_riesgo_alteraciones_nutricionales
                            "
                        />
                        <ion-label>alteraciones nutricionales</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion !=
                                    form.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion
                            "
                            :value="
                                form.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion
                            "
                        />
                        <ion-label>
                            alteraciones y transtornos de la audicion y
                            comunicación
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal !=
                                    form.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal
                            "
                            :value="
                                form.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal
                            "
                        />
                        <ion-label>
                            alteraciones y transtornos de la salud bucal
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_alteraciones_y_transtornos_visuales !=
                                    form.grupos_riesgo_alteraciones_y_transtornos_visuales
                            "
                            :value="
                                form.grupos_riesgo_alteraciones_y_transtornos_visuales
                            "
                        />
                        <ion-label>
                            alteraciones y transtornos visuales
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_cancer !=
                                    form.grupos_riesgo_cancer
                            "
                            :value="form.grupos_riesgo_cancer"
                        />
                        <ion-label>cancer</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_enferemdad_zoonotica !=
                                    form.grupos_riesgo_enferemdad_zoonotica
                            "
                            :value="form.grupos_riesgo_enferemdad_zoonotica"
                        />
                        <ion-label>enferemdad zoonotica</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_enfermedad_cardiovascular_aterogenica !=
                                    form.grupos_riesgo_enfermedad_cardiovascular_aterogenica
                            "
                            :value="
                                form.grupos_riesgo_enfermedad_cardiovascular_aterogenica
                            "
                        />
                        <ion-label>
                            enfermedad cardiovascular aterogenica
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_enfermedad_respiratoria_cronica !=
                                    form.grupos_riesgo_enfermedad_respiratoria_cronica
                            "
                            :value="
                                form.grupos_riesgo_enfermedad_respiratoria_cronica
                            "
                        />
                        <ion-label>enfermedad respiratoria cronica</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_enfermedades_huerfanas !=
                                    form.grupos_riesgo_enfermedades_huerfanas
                            "
                            :value="form.grupos_riesgo_enfermedades_huerfanas"
                        />
                        <ion-label>enfermedades huerfanas</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_enfermedades_infecciosas !=
                                    form.grupos_riesgo_enfermedades_infecciosas
                            "
                            :value="form.grupos_riesgo_enfermedades_infecciosas"
                        />
                        <ion-label>enfermedades infecciosas</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_materno_perinatal !=
                                    form.grupos_riesgo_materno_perinatal
                            "
                            :value="form.grupos_riesgo_materno_perinatal"
                        />
                        <ion-label>materno perinatal</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_problemas_de_salud_mental !=
                                    form.grupos_riesgo_problemas_de_salud_mental
                            "
                            :value="
                                form.grupos_riesgo_problemas_de_salud_mental
                            "
                        />
                        <ion-label>problemas de salud mental</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes !=
                                    form.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes
                            "
                            :value="
                                form.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes
                            "
                        />
                        <ion-label>
                            transtornos degenerativos neuropatias y enfermedades
                            autoinmunes
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas !=
                                    form.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas
                            "
                            :value="
                                form.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas
                            "
                        />
                        <ion-label>
                            trastornos asociados al uso de sustancias
                            psicoactivas
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.grupos_riesgo_violencia !=
                                    form.grupos_riesgo_violencia
                            "
                            :value="form.grupos_riesgo_violencia"
                        />
                        <ion-label>violencia</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-card v-if="estado == 'salud_infantil'">
            <ion-card-header>
                <ion-card-title>Salud infantil</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_muertes_en_menores_de_1_anno =
                                    !form.salud_infantil_muertes_en_menores_de_1_anno
                            "
                            :value="
                                form.salud_infantil_muertes_en_menores_de_1_anno
                            "
                        ></ion-checkbox>
                        <ion-label>Muertes en menores de 1 año</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_desnutricion =
                                    !form.salud_infantil_desnutricion
                            "
                            :value="form.salud_infantil_desnutricion"
                        ></ion-checkbox>
                        <ion-label>Desnutricion</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_animalia_congenita =
                                    !form.salud_infantil_animalia_congenita
                            "
                            :value="form.salud_infantil_animalia_congenita"
                        ></ion-checkbox>
                        <ion-label>Animalia congenita</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_discapacidad =
                                    !form.salud_infantil_discapacidad
                            "
                            :value="form.salud_infantil_discapacidad"
                        ></ion-checkbox>
                        <ion-label>Discapacidad</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_embarazo_producto_de_abuso =
                                    !form.salud_infantil_embarazo_producto_de_abuso
                            "
                            :value="
                                form.salud_infantil_embarazo_producto_de_abuso
                            "
                        ></ion-checkbox>
                        <ion-label>Embarazo producto de abuso</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_recien_nacido_menor_de_28_dias =
                                    !form.salud_infantil_recien_nacido_menor_de_28_dias
                            "
                            :value="
                                form.salud_infantil_recien_nacido_menor_de_28_dias
                            "
                        ></ion-checkbox>
                        <ion-label>Recien nacido menor de 28 dias</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_recien_nacido_parto_domiciliario =
                                    !form.salud_infantil_recien_nacido_parto_domiciliario
                            "
                            :value="
                                form.salud_infantil_recien_nacido_parto_domiciliario
                            "
                        ></ion-checkbox>
                        <ion-label>Recien nacido parto domiciliario</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_vacunas_incompletas =
                                    !form.salud_infantil_vacunas_incompletas
                            "
                            :value="form.salud_infantil_vacunas_incompletas"
                        ></ion-checkbox>
                        <ion-label>Vacunas incompletas</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_ninnos_sin_c_y_d =
                                    !form.salud_infantil_ninnos_sin_c_y_d
                            "
                            :value="form.salud_infantil_ninnos_sin_c_y_d"
                        ></ion-checkbox>
                        <ion-label>Niños sin c y d</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_ninno_sin_evaluacion_odontologica =
                                    !form.salud_infantil_ninno_sin_evaluacion_odontologica
                            "
                            :value="
                                form.salud_infantil_ninno_sin_evaluacion_odontologica
                            "
                        ></ion-checkbox>
                        <ion-label>Niño sin evaluacion odontologica</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi =
                                    !form.salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi
                            "
                            :value="
                                form.salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Niño menor a 5 años sin estructura AIEPI
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_problemas_visuales_y_auditivos =
                                    !form.salud_infantil_problemas_visuales_y_auditivos
                            "
                            :value="
                                form.salud_infantil_problemas_visuales_y_auditivos
                            "
                        ></ion-checkbox>
                        <ion-label>Problemas visuales y auditivos</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_caries =
                                    !form.salud_infantil_caries
                            "
                            :value="form.salud_infantil_caries"
                        ></ion-checkbox>
                        <ion-label>Caries</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_desercion_escolar =
                                    !form.salud_infantil_desercion_escolar
                            "
                            :value="form.salud_infantil_desercion_escolar"
                        ></ion-checkbox>
                        <ion-label>Desercion escolar</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_violacion =
                                    !form.salud_infantil_violacion
                            "
                            :value="form.salud_infantil_violacion"
                        ></ion-checkbox>
                        <ion-label>Violacion</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_violencia_sexual =
                                    !form.salud_infantil_violencia_sexual
                            "
                            :value="form.salud_infantil_violencia_sexual"
                        ></ion-checkbox>
                        <ion-label>Violencia sexual</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_maltrato_infantil =
                                    !form.salud_infantil_maltrato_infantil
                            "
                            :value="form.salud_infantil_maltrato_infantil"
                        ></ion-checkbox>
                        <ion-label>Maltrato infantil</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_infantil_abandono =
                                    !form.salud_infantil_abandono
                            "
                            :value="form.salud_infantil_abandono"
                        ></ion-checkbox>
                        <ion-label>Abandono</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="estado == 'enfermedades_no_transmisibles'">
            <ion-card-header>
                <ion-card-title>Enfermedades no transmisibles</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_hta =
                                    !form.enfermedades_no_transmisibles_hta
                            "
                            :value="form.enfermedades_no_transmisibles_hta"
                        ></ion-checkbox>
                        <ion-label>HTA</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_diabetes =
                                    !form.enfermedades_no_transmisibles_diabetes
                            "
                            :value="form.enfermedades_no_transmisibles_diabetes"
                        ></ion-checkbox>
                        <ion-label>Diabetes</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico =
                                    !form.enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico
                            "
                            :value="
                                form.enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Escasa adherencia tratamiento médico
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_compilacion_de_organos_blancos =
                                    !form.enfermedades_no_transmisibles_compilacion_de_organos_blancos
                            "
                            :value="
                                form.enfermedades_no_transmisibles_compilacion_de_organos_blancos
                            "
                        ></ion-checkbox>
                        <ion-label>Compilacion de organos blancos</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_tbe =
                                    !form.enfermedades_no_transmisibles_tbe
                            "
                            :value="form.enfermedades_no_transmisibles_tbe"
                        ></ion-checkbox>
                        <ion-label>TBE</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro =
                                    !form.enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro
                            "
                            :value="
                                form.enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro
                            "
                        ></ion-checkbox>
                        <ion-label>Sin marca BCG en el hombro</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_enfermedades_de_la_piel =
                                    !form.enfermedades_no_transmisibles_enfermedades_de_la_piel
                            "
                            :value="
                                form.enfermedades_no_transmisibles_enfermedades_de_la_piel
                            "
                        ></ion-checkbox>
                        <ion-label>Enfermedades de la piel</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_sintomas_respiratorios =
                                    !form.enfermedades_no_transmisibles_sintomas_respiratorios
                            "
                            :value="
                                form.enfermedades_no_transmisibles_sintomas_respiratorios
                            "
                        ></ion-checkbox>
                        <ion-label>Sintomas respiratorios</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata =
                                    !form.enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata
                            "
                            :value="
                                form.enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Hombre mayor de 50 años con evaluacion de prostata
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_sin_evaluacion_nutricional =
                                    !form.enfermedades_no_transmisibles_sin_evaluacion_nutricional
                            "
                            :value="
                                form.enfermedades_no_transmisibles_sin_evaluacion_nutricional
                            "
                        ></ion-checkbox>
                        <ion-label>Sin evaluacion nutricional</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_epodica =
                                    !form.enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_epodica
                            "
                            :value="
                                form.enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_epodica
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Mujer mayor de 45 años sin perfil epodica
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor =
                                    !form.enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor
                            "
                            :value="
                                form.enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor
                            "
                        ></ion-checkbox>
                        <ion-label>
                            No adscrito al programa adulto mayor
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_discapacidad_psicomotora =
                                    !form.enfermedades_no_transmisibles_discapacidad_psicomotora
                            "
                            :value="
                                form.enfermedades_no_transmisibles_discapacidad_psicomotora
                            "
                        ></ion-checkbox>
                        <ion-label>Discapacidad psicomotora</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.enfermedades_no_transmisibles_abandono =
                                    !form.enfermedades_no_transmisibles_abandono
                            "
                            :value="form.enfermedades_no_transmisibles_abandono"
                        ></ion-checkbox>
                        <ion-label>Abandono</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="estado == 'salud_mental'">
            <ion-card-header>
                <ion-card-title>Salud mental</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo =
                                    !form.salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo
                            "
                            :value="
                                form.salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Enfermedad mental y trastorno represivo y retardo
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_mental_sintomas_de_suicidio =
                                    !form.salud_mental_sintomas_de_suicidio
                            "
                            :value="form.salud_mental_sintomas_de_suicidio"
                        ></ion-checkbox>
                        <ion-label>Sintomas de suicidio</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_mental_retardo_psicosocial =
                                    !form.salud_mental_retardo_psicosocial
                            "
                            :value="form.salud_mental_retardo_psicosocial"
                        ></ion-checkbox>
                        <ion-label>Retardo psicosocial</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_mental_victima_de_violencia =
                                    !form.salud_mental_victima_de_violencia
                            "
                            :value="form.salud_mental_victima_de_violencia"
                        ></ion-checkbox>
                        <ion-label>Víctima de violencia</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_mental_problemas_de_conducta =
                                    !form.salud_mental_problemas_de_conducta
                            "
                            :value="form.salud_mental_problemas_de_conducta"
                        ></ion-checkbox>
                        <ion-label>Problemas de conducta</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="estado == 'salud_sexual_reproductiva'">
            <ion-card-header>
                <ion-card-title>Salud sexual y reproductiva</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_embarazo =
                                    !form.salud_sexual_reproductiva_embarazo
                            "
                            :value="form.salud_sexual_reproductiva_embarazo"
                        ></ion-checkbox>
                        <ion-label>Embarazo</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_gestante_sin_cpn =
                                    !form.salud_sexual_reproductiva_gestante_sin_cpn
                            "
                            :value="
                                form.salud_sexual_reproductiva_gestante_sin_cpn
                            "
                        ></ion-checkbox>
                        <ion-label>Gestante sin CPN</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro =
                                    !form.salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro
                            "
                            :value="
                                form.salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Gestante sin suplemento, acido folio y hierro
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_gestante_sin_psicoprofilaxis =
                                    !form.salud_sexual_reproductiva_gestante_sin_psicoprofilaxis
                            "
                            :value="
                                form.salud_sexual_reproductiva_gestante_sin_psicoprofilaxis
                            "
                        ></ion-checkbox>
                        <ion-label>Gestante sin psicoprofilaxis</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual =
                                    !form.salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual
                            "
                            :value="
                                form.salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual
                            "
                        ></ion-checkbox>
                        <ion-label>Embarazo producto de abuso sexual</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_enfermedad_de_transmision_sexual =
                                    !form.salud_sexual_reproductiva_enfermedad_de_transmision_sexual
                            "
                            :value="
                                form.salud_sexual_reproductiva_enfermedad_de_transmision_sexual
                            "
                        ></ion-checkbox>
                        <ion-label>Enfermedad de transmision sexual</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_conducta_sexual_de_riesgo =
                                    !form.salud_sexual_reproductiva_conducta_sexual_de_riesgo
                            "
                            :value="
                                form.salud_sexual_reproductiva_conducta_sexual_de_riesgo
                            "
                        ></ion-checkbox>
                        <ion-label>Conducta sexual de riesgo</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_sexual_reproductiva_sin_citologia =
                                    !form.salud_sexual_reproductiva_sin_citologia
                            "
                            :value="
                                form.salud_sexual_reproductiva_sin_citologia
                            "
                        ></ion-checkbox>
                        <ion-label>Sin citologia</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-card v-if="estado == 'nutricion'">
            <ion-card-header>
                <ion-card-title>Nutricion</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.nutricion_desnutricion =
                                    !form.nutricion_desnutricion
                            "
                            :value="form.nutricion_desnutricion"
                        ></ion-checkbox>
                        <ion-label>Desnutricion</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.nutricion_discapacidad_psicomotora =
                                    !form.nutricion_discapacidad_psicomotora
                            "
                            :value="form.nutricion_discapacidad_psicomotora"
                        ></ion-checkbox>
                        <ion-label>Discapacidad psicomotora</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.nutricion_enfermedades_gastrointestinales =
                                    !form.nutricion_enfermedades_gastrointestinales
                            "
                            :value="
                                form.nutricion_enfermedades_gastrointestinales
                            "
                        ></ion-checkbox>
                        <ion-label>Enfermedades gastrointestinales</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-card v-if="estado == 'salud_oral'">
            <ion-card-header>
                <ion-card-title>Salud oral</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_oral_enfermedades_de_la_cavidad_oral =
                                    !form.salud_oral_enfermedades_de_la_cavidad_oral
                            "
                            :value="
                                form.salud_oral_enfermedades_de_la_cavidad_oral
                            "
                        ></ion-checkbox>
                        <ion-label>Enfermedades de la cavidad oral</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_oral_tratamientos_odontologicos_sin_terminar =
                                    !form.salud_oral_tratamientos_odontologicos_sin_terminar
                            "
                            :value="
                                form.salud_oral_tratamientos_odontologicos_sin_terminar
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Tratamientos odontologicos sin terminar
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_oral_pacientes_desdentados =
                                    !form.salud_oral_pacientes_desdentados
                            "
                            :value="form.salud_oral_pacientes_desdentados"
                        ></ion-checkbox>
                        <ion-label>Pacientes desdentados</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_oral_sin_evaluacion_odontologica =
                                    !form.salud_oral_sin_evaluacion_odontologica
                            "
                            :value="form.salud_oral_sin_evaluacion_odontologica"
                        ></ion-checkbox>
                        <ion-label>Sin evaluacion odontologica</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.salud_oral_no_higiene_oral =
                                    !form.salud_oral_no_higiene_oral
                            "
                            :value="form.salud_oral_no_higiene_oral"
                        ></ion-checkbox>
                        <ion-label>No higiene oral</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-card v-if="estado == 'otros'">
            <ion-card-header>
                <ion-card-title>Otros</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked">Notas</ion-label>
                        <ion-textarea
                            @input="form.otros_notas = $event.target.value"
                            :value="form.otros_notas"
                        ></ion-textarea>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="verMedicamentos">
            <ion-card-header>
                <ion-card-title>Registrar medicamentos</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked">Código interno</ion-label>
                        <ion-input
                            type="number"
                            @input="medicamentos.codigo = $event.target.value"
                            :value="medicamentos.codigo"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Nombre</ion-label>
                        <ion-input
                            @input="medicamentos.nombre = $event.target.value"
                            :value="medicamentos.nombre"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Presentación</ion-label>
                        <ion-input
                            @input="
                                medicamentos.presentacion = $event.target.value
                            "
                            :value="medicamentos.presentacion"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Fabricante</ion-label>
                        <ion-input
                            @input="
                                medicamentos.fabricante = $event.target.value
                            "
                            :value="medicamentos.fabricante"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Cantidad</ion-label>
                        <ion-input
                            type="number"
                            @input="medicamentos.cantidad = $event.target.value"
                            :value="medicamentos.cantidad"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Cantidad actual
                        </ion-label>
                        <ion-input
                            type="number"
                            @input="
                                medicamentos.cantidad_actual =
                                    $event.target.value
                            "
                            :value="medicamentos.cantidad_actual"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Fecha de entrega
                        </ion-label>
                        <ion-datetime
                            displayFormat="YYYY-MM-DD"
                            month-short-names="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
                            display-timezone="utc"
                            @input="
                                medicamentos.fecha_entrega = $event.target.value
                            "
                            :value="medicamentos.fecha_entrega"
                        ></ion-datetime>
                    </ion-item>
                    <div style="text-align: initial">
                        <ion-button
                            v-if="estado != 'persona'"
                            @click="agregarMedicamentos()"
                        >
                            <ion-icon name="bug-outline"></ion-icon>
                            Agregar medicamentos
                        </ion-button>
                    </div>

                    <ion-item v-if="form.arrayMedicamentos.length > 0">
                        <table width="100%">
                            <template
                                v-for="(item, index) in form.arrayMedicamentos"
                            >
                                <tbody :key="index">
                                    <tr>
                                        <th>Codigo</th>
                                        <td>{{ item.codigo }}</td>
                                    </tr>
                                    <tr>
                                        <th>Nombre</th>
                                        <td>{{ item.nombre }}</td>
                                    </tr>
                                    <tr>
                                        <th>Presentacion</th>
                                        <td>{{ item.presentacion }}</td>
                                    </tr>
                                    <tr>
                                        <th>Fabricante</th>
                                        <td>{{ item.fabricante }}</td>
                                    </tr>
                                    <tr>
                                        <th>Cantidad</th>
                                        <td>{{ item.cantidad }}</td>
                                    </tr>
                                    <tr>
                                        <th>Cantidad</th>
                                        <td>{{ item.cantidad_actual }}</td>
                                    </tr>
                                    <tr>
                                        <th>Fecha de entrega</th>
                                        <td>{{ item.fecha_entrega }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </table>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="verEnfermedades">
            <ion-card-header>
                <ion-card-title>Registrar enfermedad</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked">
                            Nombre de la enfermedad
                        </ion-label>
                        <ion-input
                            @input="enfermedades.nombre = $event.target.value"
                            :value="enfermedades.nombre"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Código interno</ion-label>
                        <ion-input
                            @input="enfermedades.codigo = $event.target.value"
                            :value="enfermedades.codigo"
                        ></ion-input>
                    </ion-item>
                    <div style="text-align: initial">
                        <ion-button @click="agregarEnfermedades()">
                            <ion-icon name="bug-outline"></ion-icon>
                            Agregar enfermedad
                        </ion-button>
                    </div>

                    <ion-item v-if="form.arrayEnfermedades.length > 0">
                        <table width="100%">
                            <template
                                v-for="(item, index) in form.arrayEnfermedades"
                            >
                                <tbody :key="index">
                                    <tr>
                                        <th>Codigo</th>
                                        <td>{{ item.codigo }}</td>
                                    </tr>
                                    <tr>
                                        <th>Nombre</th>
                                        <td>{{ item.nombre }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </table>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-button
            v-if="estado != 'persona'"
            @click="Anterior()"
            expand="full"
        >
            <ion-icon name="bug-outline"></ion-icon>
            Anterior
        </ion-button>
        <ion-button
            v-if="estado != 'otros'"
            color="warning"
            @click="Siguiente()"
            expand="full"
        >
            <ion-icon name="bug-outline"></ion-icon>
            Siguiente
        </ion-button>
        <ion-button
            v-if="estado == 'otros'"
            color="warning"
            @click="Guardar()"
            expand="full"
        >
            <ion-icon name="bug-outline"></ion-icon>
            Guardar registro
        </ion-button>
    </div>
</template>

<script>
import {required, minLength, between} from "vuelidate/lib/validators";
import fn from "../../services";
import newregister from "./newregister.vue";
export default {
    components: {newregister},
    data() {
        return {
            arrayEPS: [],
            verMedicamentos: false,
            verEnfermedades: false,
            medicamentos: {
                codigo: "",
                nombre: "",
                presentacion: "",
                fabricante: "",
                cantidad: "",
                cantidad_actual: "0",
                fecha_entrega: "",
            },
            enfermedades: {
                codigo: "",
                nombre: "",
            },
            estados: [
                "persona",
                "signos_vitales",
                "grupos_riesgo",
                //'salud_infantil',
                //'enfermedades_no_transmisibles',
                //'salud_mental',
                //'salud_sexual_reproductiva',
                //'nutricion',
                //'salud_oral',
                "otros",
            ],
            estado: "persona",
            codigo: "",
            idxEncuesta: -1,
            form: {
                newRegister: null,
                arrayMedicamentos: [],
                arrayEnfermedades: [],
                persona: {
                    edad: "",
                    etnia: "",
                    grupo_poblacional: "",
                    grupo_poblacional_indigena: "",
                    cabeza_familia: false,
                    genero: "",
                    familiaridad: "",
                    documento: "",
                    documento_tipo: "",
                    fecha_nacimiento: "",
                    estado_civil: "",
                    nivel_educativo: "",
                    tipo_ocupacion: "",
                    nombre_primero: "",
                    nombre_segundo: "",
                    apellido_primero: "",
                    apellido_segundo: "",
                    eps_id: "",
                    regimen: "",
                    afiliacion_tipo: "",
                    rango: "",
                },

                signos_vitales_tension_arterial_sistolica: "",
                signos_vitales_tension_arterial_diastolica: "",
                signos_vitales_frecuencia_cardias: "",
                signos_vitales_frecuencia_respiratoria: "",

                grupos_riesgo_accidente_y_enfermedad_laboral: false,
                grupos_riesgo_alteraciones_nutricionales: false,
                grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion: false,
                grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal: false,
                grupos_riesgo_alteraciones_y_transtornos_visuales: false,
                grupos_riesgo_cancer: false,
                grupos_riesgo_enferemdad_zoonotica: false,
                grupos_riesgo_enfermedad_cardiovascular_aterogenica: false,
                grupos_riesgo_enfermedad_respiratoria_cronica: false,
                grupos_riesgo_enfermedades_huerfanas: false,
                grupos_riesgo_enfermedades_infecciosas: false,
                grupos_riesgo_materno_perinatal: false,
                grupos_riesgo_problemas_de_salud_mental: false,
                grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes: false,
                grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas: false,
                grupos_riesgo_violencia: false,
                /*
        salud_infantil_muertes_en_menores_de_1_anno: false,
        salud_infantil_desnutricion: false,
        salud_infantil_animalia_congenita: false,
        salud_infantil_discapacidad: false,
        salud_infantil_embarazo_producto_de_abuso: false,
        salud_infantil_recien_nacido_menor_de_28_dias: false,
        salud_infantil_recien_nacido_parto_domiciliario: false,
        salud_infantil_vacunas_incompletas: false,
        salud_infantil_ninnos_sin_c_y_d: false,
        salud_infantil_ninno_sin_evaluacion_odontologica: false,
        salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi: false,
        salud_infantil_problemas_visuales_y_auditivos: false,
        salud_infantil_caries: false,
        salud_infantil_desercion_escolar: false,
        salud_infantil_violacion: false,
        salud_infantil_violencia_sexual: false,
        salud_infantil_maltrato_infantil: false,
        salud_infantil_abandono: false,

        enfermedades_no_transmisibles_hta: false,
        enfermedades_no_transmisibles_diabetes: false,
        enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico: false,
        enfermedades_no_transmisibles_compilacion_de_organos_blancos: false,
        enfermedades_no_transmisibles_tbe: false,
        enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro: false,
        enfermedades_no_transmisibles_enfermedades_de_la_piel: false,
        enfermedades_no_transmisibles_sintomas_respiratorios: false,
        enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata: false,
        enfermedades_no_transmisibles_sin_evaluacion_nutricional: false,
        enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_epodica: false,
        enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor: false,
        enfermedades_no_transmisibles_discapacidad_psicomotora: false,
        enfermedades_no_transmisibles_abandono: false,

        salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo: false,
        salud_mental_sintomas_de_suicidio: false,
        salud_mental_retardo_psicosocial: false,
        salud_mental_victima_de_violencia: false,
        salud_mental_problemas_de_conducta: false,
        
        salud_sexual_reproductiva_embarazo: false,
        salud_sexual_reproductiva_gestante_sin_cpn: false,
        salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro: false,
        salud_sexual_reproductiva_gestante_sin_psicoprofilaxis: false,
        salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual: false,
        salud_sexual_reproductiva_enfermedad_de_transmision_sexual: false,
        salud_sexual_reproductiva_conducta_sexual_de_riesgo: false,
        salud_sexual_reproductiva_sin_citologia: false,

        nutricion_desnutricion: false,
        nutricion_discapacidad_psicomotora: false,
        nutricion_enfermedades_gastrointestinales: false,
        
        salud_oral_enfermedades_de_la_cavidad_oral: false,
        salud_oral_tratamientos_odontologicos_sin_terminar: false,
        salud_oral_pacientes_desdentados: false,
        salud_oral_sin_evaluacion_odontologica: false,
        salud_oral_no_higiene_oral: false,
        */
                otros_notas: "",
            },
        };
    },
    methods: {
        loadNewRegister(data) {
            this.form.newRegister = data.form;
        },
        calcularEdad() {
            let dateString = this.form.persona.fecha_nacimiento;
            dateString = dateString.split("T")[0];
            var now = new Date();
            var today = new Date(now.getYear(), now.getMonth(), now.getDate());
            var yearNow = now.getYear();
            var monthNow = now.getMonth();
            var dateNow = now.getDate();
            var dob = new Date(
                dateString.split("-")[0],
                dateString.split("-")[1],
                dateString.split("-")[2]
            );
            var yearDob = dob.getYear();
            var monthDob = dob.getMonth();
            var dateDob = dob.getDate();
            var age = {};
            var ageString = "";
            var yearString = "";
            var monthString = "";
            var dayString = "";
            let yearAge = yearNow - yearDob;
            if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
            else {
                yearAge--;
                var monthAge = 12 + monthNow - monthDob;
            }
            if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
            else {
                monthAge--;
                var dateAge = 31 + dateNow - dateDob;
                if (monthAge < 0) {
                    monthAge = 11;
                    yearAge--;
                }
            }
            age = {
                years: yearAge,
                months: monthAge,
                days: dateAge,
            };
            if (age.years > 1) yearString = " años";
            else yearString = " año";
            if (age.months > 1) monthString = " meses";
            else monthString = " mes";
            if (age.days > 1) dayString = " dias";
            else dayString = " dia";
            if (age.years > 0 && age.months > 0 && age.days > 0)
                ageString =
                    age.years +
                    yearString +
                    ", " +
                    age.months +
                    monthString +
                    ", and " +
                    age.days +
                    dayString;
            else if (age.years == 0 && age.months == 0 && age.days > 0)
                ageString = "Only " + age.days + dayString;
            else if (age.years > 0 && age.months == 0 && age.days == 0)
                ageString = age.years + yearString + ". Feliz cumpleaños!!";
            else if (age.years > 0 && age.months > 0 && age.days == 0)
                ageString =
                    age.years + yearString + " y " + age.months + monthString;
            else if (age.years == 0 && age.months > 0 && age.days > 0)
                ageString =
                    age.months + monthString + " y " + age.days + dayString;
            else if (age.years > 0 && age.months == 0 && age.days > 0)
                ageString =
                    age.years + yearString + " y " + age.days + dayString;
            else if (age.years == 0 && age.months > 0 && age.days == 0)
                ageString = age.months + monthString;
            else ageString = "";
            this.form.persona.edad = ageString;
        },
        agregarMedicamentos() {
            this.form.arrayMedicamentos.push(this.medicamentos);
            this.medicamentos = {
                codigo: "",
                nombre: "",
                presentacion: "",
                fabricante: "",
                cantidad: "",
                cantidad_actual: "0",
                fecha_entrega: "",
            };
        },
        agregarEnfermedades() {
            this.form.arrayEnfermedades.push(this.enfermedades);
            this.enfermedades = {
                codigo: "",
                nombre: "",
            };
        },
        medicamento() {
            this.verMedicamentos = !this.verMedicamentos;
        },
        enfermedad() {
            this.verEnfermedades = !this.verEnfermedades;
        },
        Siguiente() {
            const index = this.estados.findIndex(
                (estd) => estd === this.estado
            );
            this.estado = this.estados[parseInt(index) + 1];
        },
        Anterior() {
            const index = this.estados.findIndex(
                (estd) => estd === this.estado
            );
            this.estado = this.estados[parseInt(index) - 1];
        },
        Guardar() {
            let resultado = JSON.parse(localStorage.getItem("encuestas"));
            let usuario = JSON.parse(localStorage.getItem("usuario"));
            let idx = resultado.findIndex((user) => user.id === usuario.id);
            let idx2 = resultado[idx].encuestas.findIndex(
                (code) => code.codigo === parseInt(this.codigo)
            );
            resultado[idx].encuestas[idx2].registros.push(this.form);
            localStorage.setItem("encuestas", JSON.stringify(resultado));
            return this.$ionic.alertController
                .create({
                    cssClass: "my-custom-class",
                    header: "Exito",
                    subHeader: "Subtitle",
                    message: "Se ha guardado una nueva tarjeta familiar.",
                    buttons: ["OK"],
                })
                .then((a) => a.present());
        },
    },
    mounted() {
        this.codigo = parseInt(this.$route.params.codigo);
        let resultado = JSON.parse(localStorage.getItem("encuestas"));
        let usuario = JSON.parse(localStorage.getItem("usuario"));
        let idx = resultado.findIndex((user) => user.id === usuario.id);
        this.arrayEPS = fn.epsGet();
        this.idxEncuesta = resultado[idx].encuestas.findIndex(
            (Encuestas) => Encuestas.codigo === this.codigo
        );
    },
};
</script>

<style></style>
