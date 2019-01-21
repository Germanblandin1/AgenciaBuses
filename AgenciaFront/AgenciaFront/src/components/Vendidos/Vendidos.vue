<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Porcentaje de pasajes vendidos
          </h1>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-1">
                <label>Porcentaje</label>
            </div>
            <div class="col-sm-1">
                <input
                        type="text"
                        class="form-control"
                        id="porcentaje"
                        placeholder="Introduce el nombre del Pasajero"
                        v-model="porcentaje"
                        required="required" >
            </div>
            <div class="col-sm-1">
                <label>Trayecto</label>
            </div>
            <div class="col-sm-1">
                <select v-model="trayecto_id" required="required" class="form-control">
                    <option disabled value="">Introduce el Trayecto</option>
                    <option v-for="Trayecto in Trayectos" v-bind:key="Trayecto.id" v-bind:value="Trayecto.id">
                        {{ Trayecto.origen }}-{{Trayecto.destino}}
                    </option>
                </select>
            </div>
            <div class="col-sm-1">
                <button class="btn btn-info" v-on:click="getVendidos(porcentaje,trayecto_id)">Obtener Listado</button>
            </div>
        </div>
        <br>
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#Viaje</th>
                <th scope="col">Bus</th>
                <th scope="col">Pasajes Vendidos</th>
                <th scope="col">Porcentaje Vendido</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Vendidos" v-bind:key="item.Viaje">
                <th scope="row">{{item.Viaje}}</th>
                <td>{{item.Bus.nombre}}</td>
                <td>{{item.Pasajes_Vendidos}}</td>
                <td>{{item.Porcentaje_Vendido}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
</body>

</template>

<script type="text/javascript" src="./Vendidos.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
