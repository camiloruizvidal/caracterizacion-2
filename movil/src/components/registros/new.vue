<template>
    <ion-content>
        <h1>Tarjeta con codigo numero {{ form.codigo }}</h1>
        <ion-card v-if="estado == 'tarjeta_familiar'">
            <ion-card-header>
                <ion-card-title>Datos de la tarjeta familiar</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-item>
                    <ion-label position="stacked">Ficha de sisben</ion-label>
                    <ion-input
                        type="number"
                        @input="form.ficha = $event.target.value"
                        :value="form.ficha"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Nivel</ion-label>
                    <ion-input
                        type="number"
                        @input="form.nivel = $event.target.value"
                        :value="form.nivel"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Puntaje</ion-label>
                    <ion-input
                        type="number"
                        @input="form.puntaje = $event.target.value"
                        :value="form.puntaje"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Paciente con portabilidad
                    </ion-label>
                    <ion-checkbox
                        @ionChange="
                            form.pacienteportabilidad =
                                !form.pacienteportabilidad
                        "
                        :value="form.pacienteportabilidad"
                    ></ion-checkbox>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Paciente con cambio de domicilio
                    </ion-label>
                    <ion-checkbox
                        @ionChange="
                            form.pacientecambiodomicilio =
                                !form.pacientecambiodomicilio
                        "
                        :value="form.pacientecambiodomicilio"
                    ></ion-checkbox>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Estrato socioeconómico
                    </ion-label>
                    <ion-select
                        @ionChange="
                            form.estrato_socioeconomico = $event.target.value
                        "
                        :value="form.estrato_socioeconomico"
                    >
                        <ion-select-option value="Bajo-bajo">
                            Bajo-bajo
                        </ion-select-option>
                        <ion-select-option value="Bajo">Bajo</ion-select-option>
                        <ion-select-option value="Medio-bajo">
                            Medio-bajo
                        </ion-select-option>
                        <ion-select-option value="Medio">
                            Medio
                        </ion-select-option>
                        <ion-select-option value="Medio-alto">
                            Medio-alto
                        </ion-select-option>
                        <ion-select-option value="Alto">Alto</ion-select-option>
                    </ion-select>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">Tipo de vivienda</ion-label>
                    <ion-select
                        @ionChange="form.vivienda_tipo = $event.target.value"
                        :value="form.vivienda_tipo"
                    >
                        <ion-select-option value="Casa">Casa</ion-select-option>
                        <ion-select-option value="Apartamento">
                            Apartamento
                        </ion-select-option>
                        <ion-select-option value="Cuartos">
                            Cuartos
                        </ion-select-option>
                        <ion-select-option value="Improvisada">
                            Improvisada
                        </ion-select-option>
                        <ion-select-option value="En construcción">
                            En construcción
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Cuanto mide la vivienda
                    </ion-label>
                    <ion-select
                        @ionChange="form.vivienda_mide = $event.target.value"
                        :value="form.vivienda_mide"
                    >
                        <ion-select-option value="Entre 0 y 60 m2">
                            Entre 0 y 60 m2
                        </ion-select-option>
                        <ion-select-option value="Entre 61 y 140 m2">
                            Entre 61 y 140 m2
                        </ion-select-option>
                        <ion-select-option value="Mas de 140 m2">
                            Mas de 140 m2
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Tenencia de vivienda
                    </ion-label>
                    <ion-select
                        @ionChange="
                            form.vivienda_tenencia = $event.target.value
                        "
                        :value="form.vivienda_tenencia"
                    >
                        <ion-select-option value="Propia">
                            Alquilada
                        </ion-select-option>
                        <ion-select-option value="Invasión">
                            Invasión
                        </ion-select-option>
                        <ion-select-option value="Familiar">
                            Familiar
                        </ion-select-option>
                        <ion-select-option value="Otra">Otra</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Tipo de sanitario utilizado
                    </ion-label>
                    <ion-select
                        @ionChange="form.sanitario = $event.target.value"
                        :value="form.sanitario"
                    >
                        <ion-select-option value="No tiene servicio sanitario">
                            No tiene servicio sanitario
                        </ion-select-option>
                        <ion-select-option value="Letrina">
                            Letrina
                        </ion-select-option>
                        <ion-select-option
                            value="Inodoro sin conexión a alcantarillado o pozo séptico"
                        >
                            Inodoro sin conexión a alcantarillado o pozo séptico
                        </ion-select-option>
                        <ion-select-option
                            value="Inodoro conectado a pozo séptico"
                        >
                            Inodoro conectado a pozo séptico
                        </ion-select-option>
                        <ion-select-option
                            value="Inodoro conectado a alcantarillado"
                        >
                            Inodoro conectado a alcantarillado
                        </ion-select-option>
                        <ion-select-option value="Baño comunitario">
                            Baño comunitario
                        </ion-select-option>
                        <ion-select-option value="Otro">Otro</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Condición de la vivienda
                    </ion-label>
                    <ion-select
                        @ionChange="form.vivienda_ = $event.target.value"
                        :value="form.sanitario"
                    >
                        <ion-select-option value="Tierra">
                            Tierra
                        </ion-select-option>
                        <ion-select-option value="Madera, tabla o tablón">
                            Madera, tabla o tablón
                        </ion-select-option>
                        <ion-select-option value="Cemento">
                            Cemento
                        </ion-select-option>
                        <ion-select-option value="Baldosa, tableta, ladrillo">
                            Baldosa, tableta, ladrillo
                        </ion-select-option>
                        <ion-select-option value="Alfombra o tapete">
                            Alfombra o tapete
                        </ion-select-option>
                        <ion-select-option value="Marmol o madera pulída">
                            Marmol o madera pulída
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Material predominante en Techo
                    </ion-label>
                    <ion-select
                        @ionChange="form.techo = $event.target.value"
                        :value="form.techo"
                    >
                        <ion-select-option
                            value="Desechos como cartón, lata, sacos"
                        >
                            Desechos como cartón, lata, sacos
                        </ion-select-option>
                        <ion-select-option value="Paja o palma">
                            Paja o palma
                        </ion-select-option>
                        <ion-select-option value="Teja de barro">
                            Teja de barro
                        </ion-select-option>
                        <ion-select-option value="Zinc">Zinc</ion-select-option>
                        <ion-select-option value="Cemento sin cielo raso">
                            Cemento sin cielo raso
                        </ion-select-option>
                        <ion-select-option value="Plancha con cielo raso">
                            Plancha con cielo raso
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        Material predominante en Paredes
                    </ion-label>
                    <ion-select
                        @ionChange="form.paredes = $event.target.value"
                        :value="form.paredes"
                    >
                        <ion-select-option value="Vivienda sin paredes">
                            Vivienda sin paredes
                        </ion-select-option>
                        <ion-select-option value="Zinc">Zinc</ion-select-option>
                        <ion-select-option
                            value="Desechos como tela, cartón, latas"
                        >
                            Desechos como tela, cartón, latas
                        </ion-select-option>
                        <ion-select-option value="Guadua o esterilla">
                            Guadua o esterilla
                        </ion-select-option>
                        <ion-select-option value="Madera burda">
                            Madera burda
                        </ion-select-option>
                        <ion-select-option value="Bahareque">
                            Bahareque
                        </ion-select-option>
                        <ion-select-option value="Tapia pisada o adobe">
                            Tapia pisada o adobe
                        </ion-select-option>
                        <ion-select-option value="Ladrillo">
                            Ladrillo
                        </ion-select-option>
                        <ion-select-option value="Madera pulída">
                            Madera pulída
                        </ion-select-option>
                        <ion-select-option value="Piedra o material">
                            Piedra o material
                        </ion-select-option>
                    </ion-select>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        Tipo de alumbrado utilizado
                    </ion-label>
                    <ion-select
                        @ionChange="form.alumbrado = $event.target.value"
                        :value="form.alumbrado"
                    >
                        <ion-select-option value="Vela">Vela</ion-select-option>
                        <ion-select-option
                            value="Kerosene, petróleo o gasolina"
                        >
                            Kerosene, petróleo o gasolina
                        </ion-select-option>
                        <ion-select-option value="Eléctrico">
                            Eléctrico
                        </ion-select-option>
                        <ion-select-option value="Planta eléctrica">
                            Planta eléctrica
                        </ion-select-option>
                        <ion-select-option value="Energía solar">
                            Energía solar
                        </ion-select-option>
                    </ion-select>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        La vivienda se encuentra ubicada en
                    </ion-label>
                    <ion-select
                        @ionChange="form.vivienda_ubicada = $event.target.value"
                        :value="form.vivienda_ubicada"
                    >
                        <ion-select-option
                            value="Zona de riesgo para inundación"
                        >
                            Zona de riesgo para inundación
                        </ion-select-option>
                        <ion-select-option
                            value="Zona de riesgo para deslizamiento"
                        >
                            Zona de riesgo para deslizamiento
                        </ion-select-option>
                        <ion-select-option value="Cerca a la orilla de un río">
                            Cerca a la orilla de un río
                        </ion-select-option>
                        <ion-select-option value="Zona de relleno">
                            Zona de relleno
                        </ion-select-option>
                        <ion-select-option value="Falda de montaña">
                            Falda de montaña
                        </ion-select-option>
                        <ion-select-option value="Otro">Otro</ion-select-option>
                        <ion-select-option value="Zona sin riesgo">
                            Zona sin riesgo
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item v-if="form.vivienda_ubicada == 'Otro'">
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Cual
                    </ion-label>
                    <ion-input
                        @input="
                            form.vivienda_ubicada_otro = $event.target.value
                        "
                        :value="form.vivienda_ubicada_otro"
                    ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        ¿Que utiliza para cocinar?
                    </ion-label>
                    <ion-select
                        @ionChange="form.cocinar = $event.target.value"
                        :value="form.cocinar"
                    >
                        <ion-select-option value="Leña">Leña</ion-select-option>
                        <ion-select-option value="Carbon">
                            Carbón
                        </ion-select-option>
                        <ion-select-option value="Gas propano">
                            Gas propano
                        </ion-select-option>
                        <ion-select-option value="Gas natural">
                            Gas natural
                        </ion-select-option>
                        <ion-select-option value="Energía eléctrica">
                            Energía eléctrica
                        </ion-select-option>
                        <ion-select-option value="Petróleo">
                            Petróleo
                        </ion-select-option>
                        <ion-select-option value="Otro">Otro</ion-select-option>
                    </ion-select>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Número de habitaciones
                    </ion-label>
                    <ion-input
                        type="number"
                        @input="form.numero_habitaciones = $event.target.value"
                        :value="form.numero_habitaciones"
                    ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Número de dormitorios
                    </ion-label>
                    <ion-input
                        type="number"
                        @input="form.numero_dormitorios = $event.target.value"
                        :value="form.numero_dormitorios"
                    ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Número de personas por dormitorio
                    </ion-label>
                    <ion-input
                        type="number"
                        @input="form.personas_dormitorio = $event.target.value"
                        :value="form.personas_dormitorio"
                    ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">Zona</ion-label>
                    <ion-select
                        @ionChange="form.zona = $event.target.value"
                        :value="form.zona"
                    >
                        <ion-select-option value="1">1</ion-select-option>
                        <ion-select-option value="2">2</ion-select-option>
                        <ion-select-option value="3">3</ion-select-option>
                        <ion-select-option value="4">4</ion-select-option>
                        <ion-select-option value="5">5</ion-select-option>
                    </ion-select>
                </ion-item>

                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Departamento
                    </ion-label>
                    <ion-select
                        @ionChange="form.departamento = $event.target.value"
                        :value="form.departamento"
                    >
                        <ion-select-option
                            v-for="(departamento, key) in arrayDepartamentos"
                            :value="departamento.id"
                            :key="key"
                        >
                        {{ departamento.nombre }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Municipio
                    </ion-label>
                    <ion-select
                        :disabled="form.departamento == ''"
                        @ionChange="form.municipio = $event.target.value"
                        :value="form.municipio"
                    >
                        <ion-select-option
                            v-for="(municipio, key) in municipios"
                            :value="municipio.id"
                            :key="key"
                        >
                            {{ municipio.nombre }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Corregimiento</ion-label>
                    <ion-select
                        @ionChange="form.corregimiento = $event.target.value"
                        :value="form.corregimiento"
                    >
                        <ion-select-option
                            v-for="(corregimientos, key) in arrayCorregimientos"
                            :value="corregimientos.id"
                            :key="key"
                        >
                            {{ corregimientos.nombre }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Veredas</ion-label>
                    <ion-select
                        @ionChange="form.vereda = $event.target.value"
                        :value="form.vereda"
                    >
                        <ion-select-option
                            v-for="(veredas, key) in arrayVeredas"
                            :value="veredas.id"
                            :key="key"
                        >
                            {{ veredas.nombre }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Telefono
                    </ion-label>
                    <ion-input
                        type="number"
                        @input="form.telefono = $event.target.value"
                        :value="form.telefono"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Direccion y ubicacion de la vivienda
                    </ion-label>
                    <ion-input
                        @input="form.direccion = $event.target.value"
                        :value="form.direccion"
                    ></ion-input>
                </ion-item>
                <newregister2 @changeData="loadNewRegister"></newregister2>
                <ion-item>
                    <ion-label position="stacked">Ubicación GPS</ion-label>
                    <ion-input
                        type="number"
                        :readonly="true"
                        @input="form.longitud = $event.target.value"
                        :value="form.longitud"
                    ></ion-input>
                    <ion-input
                        type="number"
                        :readonly="true"
                        @input="form.latitud = $event.target.value"
                        :value="form.latitud"
                    ></ion-input>
                    <ion-input
                        type="number"
                        :readonly="true"
                        @input="form.exactitud = $event.target.value"
                        :value="form.exactitud"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-button @click="tomarFoto" expand="full">
                        <ion-icon name="bug-outline"></ion-icon>
                        Tomar Foto
                    </ion-button>
                    <input type="file" accept="image/*" ref="inputFile" style="display: none" @change="handleFileChange">
                </ion-item>
                <ion-item v-if="form.foto">
                    <img :src="form.foto" alt="Foto" />
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="estado == 'mortalidad'">
            <ion-card-header>
                <ion-card-title>Mortalidad</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <div v-for="(item, index) in form.mortalidad" :key="index">
                    <h2>Registro número {{ index + 1 }}</h2>
                    <ion-item>
                        <ion-label position="stacked">Primer nombre</ion-label>
                        <ion-input
                            @input="item.nombre_primero = $event.target.value"
                            :value="item.nombre_primero"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Segundo nombre</ion-label>
                        <ion-input
                            @input="item.nombre_segundo = $event.target.value"
                            :value="item.nombre_segundo"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Primer apellido
                        </ion-label>
                        <ion-input
                            @input="item.apellido_primero = $event.target.value"
                            :value="item.apellido_primero"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Segundo apellido
                        </ion-label>
                        <ion-input
                            @input="item.apellido_segundo = $event.target.value"
                            :value="item.apellido_segundo"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Fecha de nacimiento
                        </ion-label>
                        <ion-datetime
                            displayFormat="YYYY-MM-DD"
                            month-short-names="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
                            display-timezone="utc"
                            @input="item.nacimiento = $event.target.value"
                            :value="item.nacimiento"
                        ></ion-datetime>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">
                            Fecha de fallecimiento
                        </ion-label>
                        <ion-datetime
                            displayFormat="YYYY-MM-DD"
                            month-short-names="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
                            display-timezone="utc"
                            @input="item.fallecimiento = $event.target.value"
                            :value="item.fallecimiento"
                        ></ion-datetime>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Causa</ion-label>
                        <ion-input
                            @input="item.causa = $event.target.value"
                            :item="form.causa"
                        ></ion-input>
                    </ion-item>
                </div>

                <ion-button @click="newMortalidad" expand="full">
                    <ion-icon name="bug-outline"></ion-icon>
                    Nuevo registro
                </ion-button>
            </ion-card-content>
        </ion-card>
        <ion-card v-if="estado == 'riesgos_ambiente'">
            <ion-card-header>
                <ion-card-title>Riesgos del ambiente</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        Donde se toma el agua
                    </ion-label>
                    <ion-select
                        @ionChange="form.donde_toma_agua = $event.target.value"
                        :value="form.donde_toma_agua"
                    >
                        <ion-select-option value="ACUEDUCTO">
                            ACUEDUCTO
                        </ion-select-option>
                        <ion-select-option value="POZO">POZO</ion-select-option>
                        <ion-select-option value="LLUVIA">
                            LLUVIA
                        </ion-select-option>
                        <ion-select-option value="RIO">RIO</ion-select-option>
                        <ion-select-option value="PILA">PILA</ion-select-option>
                        <ion-select-option value="LAGUNA">
                            LAGUNA
                        </ion-select-option>
                        <ion-select-option value="MANANTIAL">
                            MANANTIAL
                        </ion-select-option>
                        <ion-select-option value="TANQUES">
                            TANQUES
                        </ion-select-option>
                        <ion-select-option value="OTRA">OTRA</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">
                        <i class="r">*</i>
                        La basura es
                    </ion-label>
                    <ion-select
                        @ionChange="form.la_basura_es = $event.target.value"
                        :value="form.la_basura_es"
                    >
                        <ion-select-option value="RECOGIDA">
                            RECOGIDA
                        </ion-select-option>
                        <ion-select-option value="CONTENEDOR">
                            CONTENEDOR
                        </ion-select-option>
                        <ion-select-option value="QUEMADA">
                            QUEMADA
                        </ion-select-option>
                        <ion-select-option value="TIRADA">
                            TIRADA
                        </ion-select-option>
                        <ion-select-option value="ENTERRADA">
                            ENTERRADA
                        </ion-select-option>
                        <ion-select-option value="OTROS">
                            OTROS
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-list>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.iluminacion_adecuada =
                                    !form.iluminacion_adecuada
                            "
                            :value="form.iluminacion_adecuada"
                        ></ion-checkbox>
                        <ion-label>Iluminación adecuada</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.ventilacion_adecuada =
                                    !form.ventilacion_adecuada
                            "
                            :value="form.ventilacion_adecuada"
                        ></ion-checkbox>
                        <ion-label>Ventilación adecuada</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="form.roedores = !form.roedores"
                            :value="form.roedores"
                        ></ion-checkbox>
                        <ion-label>Roedores</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.reservorios_de_agua =
                                    !form.reservorios_de_agua
                            "
                            :value="form.reservorios_de_agua"
                        ></ion-checkbox>
                        <ion-label>Reservorios de agua</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.anjeos_puertas_y_ventanas =
                                    !form.anjeos_puertas_y_ventanas
                            "
                            :value="form.anjeos_puertas_y_ventanas"
                        ></ion-checkbox>
                        <ion-label>Anjeos puertas y ventanas</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.uso_de_toldillos = !form.uso_de_toldillos
                            "
                            :value="form.uso_de_toldillos"
                        ></ion-checkbox>
                        <ion-label>Uso de toldillos</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="form.plagas = !form.plagas"
                            :value="form.plagas"
                        ></ion-checkbox>
                        <ion-label>Plagas (Garra patilla)</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.convivencia_inadecuada_con_animales =
                                    !form.convivencia_inadecuada_con_animales
                            "
                            :value="form.convivencia_inadecuada_con_animales"
                        ></ion-checkbox>
                        <ion-label>
                            Convivencia inadecuada con animales
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.mala_disposicion_de_plaguicidas =
                                    !form.mala_disposicion_de_plaguicidas
                            "
                            :value="form.mala_disposicion_de_plaguicidas"
                        ></ion-checkbox>
                        <ion-label>Mala disposición de plaguicidas</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.accidentes_ofidico =
                                    !form.accidentes_ofidico
                            "
                            :value="form.accidentes_ofidico"
                        ></ion-checkbox>
                        <ion-label>Accidentes ofídico</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.usan_plaguicidas = !form.usan_plaguicidas
                            "
                            :value="form.usan_plaguicidas"
                        ></ion-checkbox>
                        <ion-label>Usan plaguicidas</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="
                                form.mala_higiene_en_preparacion_de_alimentos =
                                    !form.mala_higiene_en_preparacion_de_alimentos
                            "
                            :value="
                                form.mala_higiene_en_preparacion_de_alimentos
                            "
                        ></ion-checkbox>
                        <ion-label>
                            Mala higiene en preparación de alimentos
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="form.piojos = !form.piojos"
                            :value="form.piojos"
                        ></ion-checkbox>
                        <ion-label>PIOJOS</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="form.zancudos = !form.zancudos"
                            :value="form.zancudos"
                        ></ion-checkbox>
                        <ion-label>ZANCUDOS</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-checkbox
                            @ionChange="form.acaros = !form.acaros"
                            :value="form.acaros"
                        ></ion-checkbox>
                        <ion-label>ACAROS</ion-label>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>

        <ion-button
            v-if="estado != 'tarjeta_familiar'"
            @click="estado = 'tarjeta_familiar'"
            expand="full"
        >
            <ion-icon name="bug-outline"></ion-icon>
            Datos de la tarjeta familiar
        </ion-button>
        <ion-button
            v-if="estado != 'mortalidad'"
            @click="
                estado = 'mortalidad';
                newMortalidad();
            "
            expand="full"
        >
            <ion-icon name="skull-outline"></ion-icon>
            Mortalidad
        </ion-button>
        <ion-button
            v-if="estado != 'riesgos_ambiente'"
            @click="estado = 'riesgos_ambiente'"
            expand="full"
        >
            <ion-icon name="bug-outline"></ion-icon>
            Riesgos del ambiente
        </ion-button>
        <ion-button
            color="warning"
            @click="Guardar()"
            v-if="estado == 'riesgos_ambiente'"
            expand="full"
        >
            <ion-icon name="skull-outline"></ion-icon>
            Guardar
        </ion-button>
        <ion-button v-if="false" color="danger" @click="borrar()" expand="full">
            <ion-icon name="skull-outline"></ion-icon>
            X
        </ion-button>
    </ion-content>
</template>

<script>
import fn from "../../services";
import {required} from "vuelidate/lib/validators";
import {Plugins, CameraResultType} from "@capacitor/core";
import newregister2 from "./newregister2.vue"
import localdata from "../../services/localdata";

const {Camera} = Plugins;
export default {

    components: { newregister2 },
    validations: {
        form: {
            donde_toma_agua: {required},
            la_basura_es: {required},
            direccion: {required},
            telefono: {required},
        },
    },
    data() {
        return {
            form: {
                foto: null,
                finalizado: false,
                codigo: "",
                newRegister2: null,
                //====================datos de la tarjeta familiar====================//
                ficha: "",
                nivel: "",
                puntaje: "",
                estrato_socioeconomico: "",
                pacienteportabilidad: false,
                pacientecambiodomicilio: false,
                vivienda_tipo: "",
                vivienda_tenencia: "",
                vivienda_mide: "",
                vivienda_ubicada: "",
                vivienda_ubicada_otro: null,
                sanitario: "",
                techo: "",
                paredes: "",
                alumbrado: "",
                cocinar: "",
                numero_dormitorios: "",
                numero_habitaciones: "",
                personas_dormitorio: "",
                zona: "",
                departamento: "",
                municipio: "",
                corregimiento: "",
                vereda: "",
                telefono: "",
                direccion: "",
                fechaproximavisita: "",
                longitud: "",
                latitud: "",
                exactitud: "",

                //====================datos de la tarjeta familiar====================//
                //========================riesgos del ambiente========================//

                gatos: false,
                gatos_cuantos: "",
                gatos_vacunados: "",

                perros: false,
                perros_cuantos: "",
                perros_vacunados: "",

                equinos: false,
                equinos_cuantos: "",
                equinos_vacunados: "",

                otros: false,
                otros_cuantos: "",
                otros_vacunados: "",

                donde_toma_agua: "",
                la_basura_es: "",
                iluminacion_adecuada: false,
                ventilacion_adecuada: false,
                roedores: false,
                reservorios_de_agua: false,
                anjeos_puertas_y_ventanas: false,
                uso_de_toldillos: false,
                plagas: false,
                convivencia_inadecuada_con_animales: false,
                mala_disposicion_de_plaguicidas: false,
                accidentes_ofidico: false,
                usan_plaguicidas: false,
                mala_higiene_en_preparacion_de_alimentos: false,
                piojos: false,
                acaros: false,
                zancudos: false,
                //========================riesgos del ambiente========================//
                mortalidad: [],
                registros: [],
            },
            estado: "tarjeta_familiar", //tarjeta_familiar, mortalidad, riesgos_ambiente
            arrayDepartamentos: [],
            arrayCorregimientos: [],
            arrayEps: [],
            arrayVeredas: [],
        };
    },
    watch: {
        calcularEdad(fecha) {
            // Si la fecha es correcta, calculamos la edad

            if (
                typeof fecha != "string" &&
                fecha &&
                esNumero(fecha.getTime())
            ) {
                fecha = formatDate(fecha, "yyyy-MM-dd");
            }

            var values = fecha.split("-");
            var dia = values[2];
            var mes = values[1];
            var ano = values[0];

            // cogemos los valores actuales
            var fecha_hoy = new Date();
            var ahora_ano = fecha_hoy.getYear();
            var ahora_mes = fecha_hoy.getMonth() + 1;
            var ahora_dia = fecha_hoy.getDate();

            // realizamos el calculo
            var edad = ahora_ano + 1900 - ano;
            if (ahora_mes < mes) {
                edad--;
            }
            if (mes == ahora_mes && ahora_dia < dia) {
                edad--;
            }
            if (edad > 1900) {
                edad -= 1900;
            }

            // calculamos los meses
            var meses = 0;

            if (ahora_mes > mes && dia > ahora_dia) meses = ahora_mes - mes - 1;
            else if (ahora_mes > mes) meses = ahora_mes - mes;
            if (ahora_mes < mes && dia < ahora_dia)
                meses = 12 - (mes - ahora_mes);
            else if (ahora_mes < mes) meses = 12 - (mes - ahora_mes + 1);
            if (ahora_mes == mes && dia > ahora_dia) meses = 11;

            // calculamos los dias
            var dias = 0;
            if (ahora_dia > dia) dias = ahora_dia - dia;
            if (ahora_dia < dia) {
                ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
                dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
            }

            return edad + " años, " + meses + " meses y " + dias + " días";
        },
    },
    computed: {
        municipios() {

            if(this.form.departamento == '') {
                return [];
            }
            const departamentoFind = this.arrayDepartamentos.find(departamento =>
                                            departamento.id == this.form.departamento);
            return departamentoFind.tbl_municipios;
        }
    },
    methods: {
        loadNewRegister(data) {
            this.form.newRegister = data.form;
        },
        async tomarFoto() {
            this.$refs.inputFile.click();
            //TODO Bug con android
            //const image = await Camera.getPhoto({
            //    quality: 90,
            //    allowEditing: false,
            //    resultType: CameraResultType.Base64,
            //    source: CameraSource.Camera,
            //});
            //this.form.foto = "data:image/jpeg;base64," + image.base64String;
        },

        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.form.foto = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        Guardar() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return this.$ionic.alertController
                    .create({
                        cssClass: ".alert-wrapper",
                        header: "Error",
                        message: "Todos los campos con * son requeridos.",
                        buttons: ["ok"],
                    })
                    .then((a) => a.present());
            } else {
                let resultado = JSON.parse(localdata.getItem("encuestas"));
                let usuario = JSON.parse(localdata.getItem("usuario"));
                this.idx = resultado.findIndex(
                    (user) => user.id === usuario.id
                );
                resultado[this.idx].encuestas.push(this.form);
                usuario.actual = parseInt(usuario.actual) + 1;
                localdata.setItem("usuario", JSON.stringify(usuario));
                localdata.remove("encuestas");
                localdata.setItem("encuestas", JSON.stringify(resultado));
                this.$ionic.alertController
                    .create({
                        cssClass: "my-custom-class",
                        header: "Tarjeta registrada con éxito",
                        message: "Registrando datos de la persona.",
                        buttons: ["OK"],
                    })
                    .then((a) => a.present());
                this.$router.push({
                    name: "personasNew",
                    params: {codigo: this.form.codigo},
                });
            }
        },
        newMortalidad() {
            this.form.mortalidad.push({
                nombre_primero: "",
                nombre_segundo: "",
                apellido_primero: "",
                apellido_segundo: "",
                nacimiento: "",
                fallecimiento: "",
                causa: "",
            });
        },
    },
    mounted() {
        let data = fn.usuarioLoad();
        this.form.codigo = data.actual;

        const departamentos = fn.departamentosGet();

        departamentos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        departamentos.forEach(item => {
            item.tbl_municipios.sort((a, b) => a.nombre.localeCompare(b.nombre));
        });

        this.arrayDepartamentos = departamentos;
        this.arrayCorregimientos = fn.corregimientosGet();
        this.arrayEps = fn.epsGet();
        this.arrayVeredas = fn.veredasGet();
    },
};
</script>
