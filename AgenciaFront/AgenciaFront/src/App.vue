<template>
  <div id="app">
    <Pasajeros/>
    <Choferes/>
    <Buses/>
    <Horarios/>
    <Trayectos/>
    <Viajes/>
    <Asignaciones/>
    <Listado/>
    <Vendidos/>
  </div>
</template>

<script>
import Pasajeros from './components/Pasajeros/Pasajeros.vue';
import Choferes from './components/Choferes/Choferes.vue';
import Buses from './components/Buses/Buses.vue';
import Horarios from './components/Horarios/Horarios.vue';
import Trayectos from './components/Trayectos/Trayectos.vue';
import Viajes from './components/Viajes/Viajes.vue';
import Asignaciones from './components/Asignaciones/Asignaciones.vue';
import Listado from './components/Listado/Listado.vue';
import Vendidos from './components/Vendidos/Vendidos.vue';

export default {
  name: 'App',
  components: {
    Pasajeros,
    Choferes,
    Buses,
    Horarios,
    Trayectos,
    Viajes,
    Asignaciones,
    Listado,
    Vendidos
  }
}
</script>

<style>

</style>
