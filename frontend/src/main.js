import Vue from 'vue'
import router from './router'
import './router/interceptor'
import './mixins'
import store from './store'
import App from './App.vue'
import Http from './modules/http.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import JsonExcel from 'vue-json-excel'
import vSelect from 'vue-select'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIcon } from 'vue2-leaflet'
import { Icon }  from 'leaflet'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css'
import 'leaflet/dist/leaflet.css'

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Http)
Vue.use(HighchartsVue)


Vue.component("downloadExcel", JsonExcel)
Vue.component("v-select", vSelect)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)
Vue.component('l-tooltip', LTooltip)
Vue.component('l-icon', LIcon)

Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
