
<template>
  <div id="app">
<ion-app>
    <ion-menu side="start" ref="menuSICP" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-if="logueado" @click="redirect('registros')">
            <ion-icon name="mail" slot="start"></ion-icon>
            <ion-label>Registros</ion-label>
          </ion-item>

          <ion-item v-if="logueado" @click="redirect('enviar')">
            <ion-icon name="paper-plane" slot="start"></ion-icon>  
            <ion-label>Enviar registros</ion-label>
          </ion-item>
          <ion-item v-if="logueado" @click="redirect('registrosNew')">
            <ion-icon name="person-add" slot="start"></ion-icon>
            <ion-label>Nueva tarjeta</ion-label>
          </ion-item>
          
          <ion-item @click="redirect('configurar')">
            <ion-icon name="heart" slot="start"></ion-icon>
            <ion-label>Configurar</ion-label>
          </ion-item>

          <ion-item @click="redirect('login')">
            <ion-icon name="trash" slot="start"></ion-icon>
            <ion-label v-if="logueado">Cerrar sesión</ion-label>
            <ion-label v-else>Iniciar sesión</ion-label>
          </ion-item>

          <template v-if="false">
          <ion-item>
            <ion-icon name="archive" slot="start"></ion-icon>
            <ion-label>Archived</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-label>Spam</ion-label>
          </ion-item>
          </template>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header v-if="!isLogin">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button>=</ion-menu-button>
          </ion-buttons>
          <ion-title>{{title}}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <router-view></router-view>
      </ion-content>
    </div>
  </ion-app>

  </div>
</template>
<script>
import localdata from './services/localdata';
export default {
  data () {
    return {
      title:'',
      
    }
  },
  methods:{
    redirect(url)
    {
      if(this.$route.name!==url)
      {
        this.$router.push({name:url});
      }
      this.$refs.menuSICP.close();

    }
  },
  computed: {

    logueado() {
      if(this.$route) {
        this.title = this.$route.meta.title;
      }
      const usuario = localdata.getItem('usuario');
      return usuario != null;
    },

    isLogin() {
      return this.$route.meta.title == "Login"
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.r{
  color:red;
  font-size: 30px;
}
.ahrefnostyle{
  color: #000;
  text-decoration: none;
}
</style>
