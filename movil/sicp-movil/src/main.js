import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuelidate from 'vuelidate'

import Ionic from "@ionic/vue"
import Axios from 'axios'
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

window.axios = Axios;
Vue.config.productionTip = false;
Vue.use(Ionic);
Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')