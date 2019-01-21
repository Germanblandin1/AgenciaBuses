<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Viajes
          <b-btn v-b-modal="'myModalViaje'">Agregar Viaje</b-btn>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Trayecto</th>
                <th scope="col">Horario</th>
                <th scope="col">Bus</th>
                <th scope="col">Chofer</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Viaje in Viajes" v-bind:key="Viaje.id">
                <th scope="row">{{Viaje.id}}</th>
                <td>{{Viaje.trayecto}}</td>
                <td>{{Viaje.horario}}</td>
                <td>{{Viaje.bus}}</td>
                <td>{{Viaje.chofer}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getViaje(Viaje.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deleteViaje(Viaje.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Viaje Modal -->
        <b-modal ref="myModalRefViaje" hide-footer title="Agrega un Viaje" id="myModalViaje">
                <form v-on:submit.prevent="addViaje()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Asignacion_heading">Trayecto</label>
                        <select v-model="newViaje.trayecto" required="required" class="form-control">
                            <option disabled value="">Introduce el Trayecto de la Asignacion</option>
                            <option v-for="Trayecto in Trayectos" v-bind:key="Trayecto.id" v-bind:value="Trayecto.id">
                                {{ Trayecto.origen }}-{{Trayecto.destino}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Horario</label>
                        <select v-model="newViaje.horario" required="required" class="form-control">
                            <option disabled value="">Introduce el Horario de la Asignacion</option>
                            <option v-for="Horario in Horarios" v-bind:key="Horario.id" v-bind:value="Horario.id">
                                {{ Horario.dia }}-{{Horario.hora}}-{{Horario.minuto}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Bus</label>
                        <select v-model="newViaje.bus" required="required" class="form-control">
                            <option disabled value="">Introduce el Bus de la Asignacion</option>
                            <option v-for="Bus in Buses" v-bind:key="Bus.id" v-bind:value="Bus.id">
                                {{ Bus.nombre }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Chofer</label>
                        <select v-model="newViaje.chofer" required="required" class="form-control">
                            <option disabled value="">Introduce el Chofer de la Asignacion</option>
                            <option v-for="Chofer in Choferes" v-bind:key="Chofer.id" v-bind:value="Chofer.id">
                                {{ Chofer.nombre }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Viaje modal -->


          <!-- Edit Viaje Modal -->
          <b-modal ref="modalEditViaje" hide-footer title="Editar Viaje" id="modalEditViaje">
                <form v-on:submit.prevent="updateViaje()">
                <div class="modal-body">
                                        <div class="form-group">
                      <label for="Asignacion_heading">Trayecto</label>
                        <select v-model="currentViaje.trayecto" required="required" class="form-control">
                            <option disabled value="">Introduce el Trayecto de la Asignacion</option>
                            <option v-for="Trayecto in Trayectos" v-bind:key="Trayecto.id" v-bind:value="Trayecto.id">
                                {{ Trayecto.origen }}-{{Trayecto.destino}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Horario</label>
                        <select v-model="currentViaje.horario" required="required" class="form-control">
                            <option disabled value="">Introduce el Horario de la Asignacion</option>
                            <option v-for="Horario in Horarios" v-bind:key="Horario.id" v-bind:value="Horario.id">
                                {{ Horario.dia }}-{{Horario.hora}}-{{Horario.minuto}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Bus</label>
                        <select v-model="currentViaje.bus" required="required" class="form-control">
                            <option disabled value="">Introduce el Bus de la Asignacion</option>
                            <option v-for="Bus in Buses" v-bind:key="Bus.id" v-bind:value="Bus.id">
                                {{ Bus.nombre }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Asignacion_heading">Chofer</label>
                        <select v-model="currentViaje.chofer" required="required" class="form-control">
                            <option disabled value="">Introduce el Chofer de la Asignacion</option>
                            <option v-for="Chofer in Choferes" v-bind:key="Chofer.id" v-bind:value="Chofer.id">
                                {{ Chofer.nombre }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Viaje modal -->
        <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
        </div>
</body>

</template>

<script type="text/javascript" src="./Viajes.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
