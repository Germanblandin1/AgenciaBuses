<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Trayectos
          <b-btn v-b-modal="'myModalTrayecto'">Agregar Trayecto</b-btn>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Origen</th>
                <th scope="col">Destino</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Trayecto in Trayectos" v-bind:key="Trayecto.id">
                <th scope="row">{{Trayecto.id}}</th>
                <td>{{Trayecto.origen}}</td>
                <td>{{Trayecto.destino}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getTrayecto(Trayecto.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deleteTrayecto(Trayecto.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Trayecto Modal -->
        <b-modal ref="myModalRefTrayecto" hide-footer title="Agrega un Trayecto" id="myModalTrayecto">
                <form v-on:submit.prevent="addTrayecto()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Trayecto_heading">Origen</label>
                      <input
                        type="text"
                        class="form-control"
                        id="origen"
                        placeholder="Introduce el origen del Trayecto"
                        v-model="newTrayecto.origen"
                        required="required" >
                    </div>
                    <div class="form-group">
                      <label for="Trayecto_heading">Destino</label>
                      <input
                        type="text"
                        class="form-control"
                        id="destino"
                        placeholder="Introduce el destino del Trayecto"
                        v-model="newTrayecto.destino"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Trayecto modal -->


          <!-- Edit Trayecto Modal -->
          <b-modal ref="modalEditTrayecto" hide-footer title="Editar Trayecto" id="modalEditTrayecto">
                <form v-on:submit.prevent="updateTrayecto()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Trayecto_heading">Origen</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Trayecto_origen"
                        placeholder="Introduce el origen del Trayecto"
                        v-model="currentTrayecto.origen"
                        required="required" >
                    </div>
                    <div class="form-group">
                      <label for="Trayecto_heading">Destino</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Trayecto_destino"
                        placeholder="Introduce el destino del Trayecto"
                        v-model="currentTrayecto.destino"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Trayecto modal -->
          <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
          </div>
</body>

</template>

<script type="text/javascript" src="./Trayectos.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
