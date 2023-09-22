export default [
  {
    path: '/',
    component: () => import('../components/Layout/Login.vue'),
    children: [
      { path: '/login', component: () => import('../pages/Login/Index.vue') },
      { path: '/', redirect: '/login' }
    ]
  },
  {
    path: '/',
    component: () => import('../components/Layout/Complex.vue'),
    children: [
      { path: '/dashboard', component: () => import('../pages/Dashboard/Dashboard.vue') },
      { path: '/tarjetas-familiares', component: () => import('../pages/FamilyCards/Index.vue') },
      { path: '/tarjetas-familiares/detalle/:id', component: () => import('../pages/FamilyCards/Detail.vue'), name: 'tarjetasFamiliaresDetalle' },
      { path: '/ubicaciones', component: () => import('../pages/FamilyCards/Ubication.vue') , name: 'ubicaciones'},
      { path: '/personas', component: () => import('../pages/Persons/Index.vue') },
      { path: '/medicamentos', component: () => import('../pages/Medicine/Index.vue') },
      { path: '/enfermedades', component: () => import('../pages/Diseases/Index.vue') },
      { path: '/ficha', component: () => import('../pages/Card/Index.vue') },
      { path: '/barrios', component: () => import('../pages/Neighborhoods/Index.vue') },
      { path: '/usuarios', component: () => import('../pages/Users/Index.vue') },
      { path: '/graficos', component: () => import('../pages/Graphics/Index.vue') },
      { path: '/graficos-personas-municipios', component: () => import('../pages/Graphics/PeoplesByMunicipality.vue') },
      { path: '/graficos-fichas-mensuales', component: () => import('../pages/Graphics/FilesMonth.vue') },
      { path: '/grafico-informativos', component: () => import('../pages/Graphics/Informat.vue') },
      { path: '/graficos-fichas-municipios', component: () => import('../pages/Graphics/FilesByMunicipality.vue') },
      { path: '/configuraciones', component: () => import('../pages/Settings/Index.vue') },
      { path: '/configuraciones/:id', component: () => import('../pages/Settings/Detail.vue') },
      { path: '/perfil', component: () => import('../pages/Profile/Index.vue') },
      { path: '/', redirect: '/dashboard' }
    ]
  }
]
