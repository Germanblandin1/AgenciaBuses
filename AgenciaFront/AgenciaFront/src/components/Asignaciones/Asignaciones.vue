<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Asignaciones
          <b-btn v-b-modal="'myModalAsignacion'">Agregar Asignacion</b-btn>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Viaje</th>
                <th scope="col">Pasajero</th>
                <th scope="col">Npuesto</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Asignacion in Asignacions" v-bind:key="Asignacion.id">
                <th scope="row">{{Asignacion.id}}</th>
                <td>{{Asignacion.viaje}}</td>
                <td>{{Asignacion.pasajero}}</td>
                <td>{{Asignacion.npuesto}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getAsignacion(Asignacion.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deleteAsignacion(Asignacion.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Asignacion Modal -->
        <b-modal ref="myModalRefAsignacion" hide-footer title="Agrega una Asignacion" id="myModalAsignacion">
                <form v-on:submit.prevent="addAsignacion()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Asignacion_heading">Viaje</label>
                        <select v-model="newAsignacion.viaje" required="required" class="form-control" id="viaje">
                            <option disabled value="">Introduce el Viaje de la Asignacion</option>
                            <option v-for="Viaje in Viajes" v-bind:key="Viaje.id" v-bind:value="Viaje.id">
                                {{ Viaje.id }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Pasajero</label>
                        <select v-model="newAsignacion.pasajero" required="required" class="form-control" id="pasajero">
                            <option disabled value="">Introduce el Pasajero de la Asignacion</option>
                            <option v-for="Pasajero in Pasajeros" v-bind:key="Pasajero.id" v-bind:value="Pasajero.id">
                                {{ Pasajero.nombre }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Npuesto</label>
                      <input
                        type="text"
                        class="form-control"
                        id="npuesto"
                        placeholder="Introduce el Puesto de la Asignacion"
                        v-model="newAsignacion.npuesto"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Asignacion modal -->


          <!-- Edit Asignacion Modal -->
          <b-modal ref="modalEditAsignacion" hide-footer title="Editar Asignacion" id="modalEditAsignacion">
                <form v-on:submit.prevent="updateAsignacion()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Asignacion_heading">Viaje</label>
                        <select v-model="currentAsignacion.viaje" required="required" class="form-control" id="viaje">
                            <option disabled value="">Introduce el Viaje de la Asignacion</option>
                            <option v-for="Viaje in Viajes" v-bind:key="Viaje.id" v-bind:value="Viaje.id">
                                {{ Viaje.id }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Pasajero</label>
                        <select v-model="currentAsignacion.pasajero" required="required" class="form-control" id="pasajero">
                            <option disabled value="">Introduce el Pasajero de la Asignacion</option>
                            <option v-for="Pasajero in Pasajeros" v-bind:key="Pasajero.id" v-bind:value="Pasajero.id">
                                {{ Pasajero.nombre }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Npuesto</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Asignacion_npuesto"
                        placeholder="Introduce el puesto de la Asignacion"
                        v-model="currentAsignacion.npuesto"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Asignacion modal -->
          <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
          </div>
</body>

</template>

<script type="text/javascript" src="./Asignaciones.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
