<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Choferes
          <b-btn v-b-modal="'myModalChofer'">Agregar Chofer</b-btn>
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
              <tr v-for="Chofer in Chofers" v-bind:key="Chofer.id">
                <th scope="row">{{Chofer.id}}</th>
                <td>{{Chofer.nombre}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getChofer(Chofer.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deleteChofer(Chofer.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Chofer Modal -->
        <b-modal ref="myModalRefChofer" hide-footer title="Agrega un Chofer" id="myModalChofer">
                <form v-on:submit.prevent="addChofer()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Chofer_heading">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        placeholder="Introduce el nombre del Chofer"
                        v-model="newChofer.nombre"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Chofer modal -->


          <!-- Edit Chofer Modal -->
          <b-modal ref="modalEditChofer" hide-footer title="Editar Chofer" id="modalEditChofer">
                <form v-on:submit.prevent="updateChofer()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Chofer_heading">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Chofer_heading"
                        placeholder="Introduce el nombre del Chofer"
                        v-model="currentChofer.nombre"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Chofer modal -->
          <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
          </div>
</body>

</template>

<script type="text/javascript" src="./Choferes.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
