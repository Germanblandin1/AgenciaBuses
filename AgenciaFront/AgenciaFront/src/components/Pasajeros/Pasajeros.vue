<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Pasajeros
          <b-btn v-b-modal="'myModalPasajero'">Agregar Pasajero</b-btn>
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
              <tr v-for="Pasajero in Pasajeros" v-bind:key="Pasajero.id">
                <th scope="row">{{Pasajero.id}}</th>
                <td>{{Pasajero.nombre}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getPasajero(Pasajero.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deletePasajero(Pasajero.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Pasajero Modal -->
        <b-modal ref="myModalRefPasajero" hide-footer title="Agrega un Pasajero" id="myModalPasajero">
                <form v-on:submit.prevent="addPasajero()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Pasajero_heading">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        placeholder="Introduce el nombre del Pasajero"
                        v-model="newPasajero.nombre"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Pasajero modal -->


          <!-- Edit Pasajero Modal -->
          <b-modal ref="modalEditPasajero" hide-footer title="Editar Pasajero" id="modalEditPasajero">
                <form v-on:submit.prevent="updatePasajero()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Pasajero_heading">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Pasajero_heading"
                        placeholder="Introduce el nombre del Pasajero"
                        v-model="currentPasajero.nombre"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Pasajero modal -->
          <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
          </div>
</body>

</template>

<script type="text/javascript" src="./Pasajeros.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
