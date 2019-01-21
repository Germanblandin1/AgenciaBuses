<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Buses
          <b-btn v-b-modal="'myModalBus'">Agregar Bus</b-btn>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Bus in Buss" v-bind:key="Bus.id">
                <th scope="row">{{Bus.id}}</th>
                <td>{{Bus.nombre}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getBus(Bus.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deleteBus(Bus.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Bus Modal -->
        <b-modal ref="myModalRefBus" hide-footer title="Agrega un Bus" id="myModalBus">
                <form v-on:submit.prevent="addBus()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Bus_heading">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        placeholder="Introduce el nombre del Bus"
                        v-model="newBus.nombre"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Bus modal -->


          <!-- Edit Bus Modal -->
          <b-modal ref="modalEditBus" hide-footer title="Editar Bus" id="modalEditBus">
                <form v-on:submit.prevent="updateBus()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Bus_heading">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Bus_heading"
                        placeholder="Introduce el nombre del Bus"
                        v-model="currentBus.nombre"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Bus modal -->
          <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
          </div>
</body>

</template>

<script type="text/javascript" src="./Buses.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
