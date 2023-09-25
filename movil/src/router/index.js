import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import registros from '../components/registros/index'
import registrosNew from '../components/registros/new'
import enviar from '../components/registros/send'
import personasNew from '../components/registros/personanew'
import configurar from '../components/configuracion/server'


import login from '../components/user/login'
const pathName = window.location.origin;
Vue.use(VueRouter)

const routes = [
  {
    path: pathName + '/registros',
    name: 'registros',
    component: registros,
    meta:{title:'Registros'}
  },
  {
    path: pathName + '/registros/new',
    name: 'registrosNew',
    component: registrosNew,
    meta:{title:'Nuevo registro'}
  },
  {
    path: pathName + '/registros/persona/:codigo',//codigo de la tarjeta
    name: 'personasNew',
    component: personasNew,
    meta:{title:'Registrando datos personales'}
  },
  {
    path: pathName + '/configurar',//codigo de la tarjeta
    name: 'configurar',
    component: configurar,
    meta:{title:'Conexión al servidor'}
  },
  {
    path: pathName + '/enviar',//codigo de la tarjeta
    name: 'enviar',
    component: enviar,
    meta:{title:'Enviar registros'}
  },
  
  {
    path: pathName + '/',
    name: 'login',
    component: login,
    meta:{title:'Login'}
  },

  {
    path: pathName + '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
console.log({pathName})
const router = new VueRouter({
  //mode: 'history',
  routes
})

export default router
