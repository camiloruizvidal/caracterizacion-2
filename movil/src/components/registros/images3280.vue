<template>
    <div>
        <div v-for="(imagePath, index) in images" :key="index">
            <a
                :href="require(`@/assets/images/3280/${imagePath}`)"
                :download="getFileName(imagePath)"
            >
                <img :src="require(`@/assets/images/3280/${imagePath}`)" alt="Image" @load="imagenCargada"/>
            </a>
            <br>
        </div>
        <ion-button
            v-if="images.length>0"
            color="warning"
            @click="recragarPagina()"
            expand="full"
        >
            <ion-icon name="skull-outline"></ion-icon>
            Nuevo usuario
        </ion-button>
    </div>
</template>

<script>
import { IonLoading } from '@ionic/vue';

export default {
    name: "images3280",

    data() {
        return {
            loading: '',
            images: [],
            imagenesCargadas: 0,
        };
    },

	components: {
		IonLoading
	},

    props: ["form"],

    methods: {

        calcularEdad(fechaNacimiento) {
            const fechaNac = new Date(fechaNacimiento);
            const fechaActual = new Date();
            const edadMilisegundos = fechaActual - fechaNac;
            const edad = new Date(edadMilisegundos).getUTCFullYear() - 1970;
            return edad;
        },

        getFileName(path) {
            // Extrae el nombre del archivo a partir de la ruta
            const parts = path.split("/");
            return parts[parts.length - 1];
        },

        allImages() {
            return [
                {
                    id: 1,
                    name: "1-primera infancia",
                    edad: { min: 0, max: 6 },
                    genero: ["Masculino", "Femenino"],
                    embarazo: false,
                    value: [
                        "primera infancia 1.jpg",
                        "primera infancia 2.jpg",
                        "primera infancia 3.jpg",
                    ],
                },
                {
                    id: 2,
                    name: "2-infancia",
                    edad: { min: 7, max: 12 },
                    genero: ["Masculino", "Femenino"],
                    embarazo: false,
                    value: ["infancia 1.jpg", "infancia 2.jpg"],
                },
                {
                    id: 3,
                    name: "3-adolescencia",
                    edad: { min: 13, max: 18 },
                    genero: ["Masculino", "Femenino"],
                    embarazo: false,
                    value: [
                        "adolescencia 1.jpg",
                        "adolescencia 2.jpg",
                        "adolescencia 3.jpg",
                    ],
                },
                {
                    id: 4,
                    name: "4-juventud",
                    edad: { min: 19, max: 30 },
                    genero: ["Masculino", "Femenino"],
                    embarazo: false,
                    value: [
                        "juventud 1.jpg",
                        "juventud 2.jpg",
                        "juventud 3.jpg",
                    ],
                },
                {
                    id: 5,
                    name: "5-adultez",
                    edad: { min: 31, max: 60 },
                    genero: ["Masculino", "Femenino"],
                    embarazo: false,
                    value: [
                        "adultez 1.jpg",
                        "adultez 2.jpg",
                        "adultez 3.jpg",
                        "adultez 4.jpg",
                    ],
                },
                {
                    id: 6,
                    name: "6-vejez",
                    edad: { min: 61, max: 100 },
                    genero: ["Masculino", "Femenino"],
                    embarazo: false,
                    value: [
                        "vejez 1.jpg",
                        "vejez 2.jpg",
                        "vejez 3.jpg",
                        "vejez 4.jpg",
                        "vejez 5.jpg",
                        "vejez 6.jpg",
                        "vejez 7.jpg",
                    ],
                },
                {
                    id: 7,
                    name: "7-embarazada",
                    edad: { min: 0, max: 99 },
                    genero: ["Femenino"],
                    embarazo: true,
                    value: [
                        "embarazada 1.jpg",
                        "embarazada 2.jpg",
                        "embarazada 3.jpg",
                        "embarazada 4.jpg",
                    ],
                },
                {
                    id: 8,
                    name: "8-atencion del parto",
                    edad: { min: 0, max: 99 },
                    genero: ["Femenino"],
                    embarazo: true,
                    value: ["atencion del parto 1.jpg"],
                },
                {
                    id: 9,
                    name: "9-atencion del recien nacido",
                    edad: { min: 0, max: 1 },
                    embarazo: true,
                    genero: ["Masculino", "Femenino"],
                    value: [
                        "atencion del recien nacido 2.jpg",
                        "atencion del recien nacido.jpg",
                    ],
                },
            ];
        },

        searchImages(edad, genero, isEmbarazo) {
            console.log({allImages: this.allImages()})

            isEmbarazo = isEmbarazo === undefined ? false : isEmbarazo;

            if (isNaN(edad)) {
                return [];
            }

            if (genero === "") {
                return [];
            }
            console.log('Empieza el filter');
            const filteredData = this.allImages().filter((item) => {

                console.log({
                    'item.edad.min <= edad &&': item.edad.min <= edad,
                    'item.edad.max >= edad &&': item.edad.max >= edad,
                    'item.genero.includes(genero) &&': item.genero.includes(genero),
                    'item.embarazo === isEmbarazo': item.embarazo === isEmbarazo,
                    validate: item.edad.min <= edad &&
                    item.edad.max >= edad &&
                    item.genero.includes(genero) &&
                    item.embarazo === isEmbarazo
                })
                return (
                    item.edad.min <= edad
                    && item.edad.max >= edad
                    && item.genero.includes(genero)
                    //&& item.embarazo === isEmbarazo
                );

            });

            const concatenatedData = [].concat(...filteredData.map((item) => {
                return item.value.map((value) => {
                    return `${item.name}/${value}`;
                });
            }));


            return concatenatedData;
        },

        recragarPagina() {
            window.location.reload();
        },

        async showLoading() {
            await this.$ionic.loadingController
			.create({
				message: 'Cargando imagenes. '
                            + 'Por favor espere, este proceso puede demorarse unos '
                            + 'dependiendo del modelo de su dispositivo y sus capacidades.'
			}).then((loading) => {
                this.loading = loading;
                loading.present()
            });
        },

        imagenCargada() {
            this.imagenesCargadas++;

            if (this.imagenesCargadas === this.images.length) {
                this.loading.dismiss();
            }
        }
    },

    async mounted() {
        await this.showLoading();
        this.images = this.searchImages(
            this.calcularEdad(this.form.persona.fecha_nacimiento),
            this.form.persona.genero,
            true//this.form.salud_sexual_reproductiva_embarazo
        );

    },
};
</script>

<style></style>
