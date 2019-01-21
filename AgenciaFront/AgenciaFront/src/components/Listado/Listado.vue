<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Listado de Promedio de Pasajeros
          <button class="btn btn-info" v-on:click="getListado()">Obtener Listado</button>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Origen</th>
                <th scope="col">Destino</th>
                <th scope="col">Promedio Pasajeros</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Listado" v-bind:key="item.trayecto.id">
                <th scope="row">{{item.trayecto.id}}</th>
                <td>{{item.trayecto.origen}}</td>
                <td>{{item.trayecto.destino}}</td>
                <td>{{item.promedio}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
</body>

</template>

<script type="text/javascript" src="./Listado.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
