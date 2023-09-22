<template>
	<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to='/dashboard'>
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SICP <sup>v2</sup></div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <li class="nav-item" active-class="active">
                <router-link class="nav-link" to="/dashboard">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Inicio</span>
				</router-link>
            </li>
			<li class="nav-item" active-class="active">
				<router-link class="nav-link" to="/tarjetas-familiares">
                    <i class="fas fa-fw fa-book"></i>
                    <span>Tarjetas Familiares</span>
				</router-link>
            </li>
            <li class="nav-item" active-class="active">
				<router-link class="nav-link" to="/personas">
                    <i class="fas fa-fw fa-book"></i>
                    <span>Lista de Personas</span>
				</router-link>
            </li>
            <li class="nav-item" active-class="active">
                <router-link class="nav-link" to="/graficos">
                    <i class="fas fa-fw fa-users"></i>
                    <span>Graficos</span>
				</router-link>
            </li>
			<li class="nav-item" active-class="active">
                <router-link class="nav-link" to="/usuarios">
                    <i class="fas fa-fw fa-users"></i>
                    <span>Usuarios</span>
				</router-link>
            </li>
            <li class="nav-item" active-class="active">
                <router-link class="nav-link" to="/barrios">
                    <i class="fas fa-fw fa-map"></i>
                    <span>Barrios</span>
				</router-link>
            </li>
            <li class="nav-item" active-class="active">
                <router-link class="nav-link" to="/configuraciones">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Configuraciones</span>
				</router-link>
            </li>
        </ul>
</template>