<template>
<body>
    <div>
      <div class="container">
        <div class="row">
          <h1>Lista de Horarios
          <b-btn v-b-modal="'myModalHorario'">Agregar Horario</b-btn>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Dia</th>
                <th scope="col">Hora</th>
                <th scope="col">Minuto</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Horario in Horarios" v-bind:key="Horario.id">
                <th scope="row">{{Horario.id}}</th>
                <td>{{Horario.dia}}</td>
                <td>{{Horario.hora}}</td>
                <td>{{Horario.minuto}}</td>
                <td>
                  <button class="btn btn-info" v-on:click="getHorario(Horario.id)">Editar</button>
                  <button class="btn btn-danger" v-on:click="deleteHorario(Horario.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="loading" v-if="loading===true">Loading&#8230;</div>
    </div>
    <!-- Add Horario Modal -->
        <b-modal ref="myModalRefHorario" hide-footer title="Agrega un Horario" id="myModalHorario">
                <form v-on:submit.prevent="addHorario()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Horario_heading">Dia</label>
                      <select v-model="newHorario.dia" required="required" class="form-control" id="dia">
                            <option disabled value="">Introduce el dia del Horario</option>
                            <option value="LU">Lunes </option>
                            <option value="MA">Martes </option>
                            <option value="MI">Miercoles </option>
                            <option value="JU">Jueves </option>
                            <option value="VI">Viernes </option>
                            <option value="SA">Sabado </option>
                            <option value="DO">Domingo </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Horario_heading">hora</label>
                      <input
                        type="number"
                        min=0
                        max=23
                        step=1
                        class="form-control"
                        id="hora"
                        placeholder="Introduce la hora del Horario"
                        v-model="newHorario.hora"
                        required="required" >
                    </div>
                    <div class="form-group">
                      <label for="Horario_heading">Minuto</label>
                      <input
                        type="number"
                        min=0
                        max=59
                        step=1
                        class="form-control"
                        id="hora"
                        placeholder="Introduce el minuto del Horario"
                        v-model="newHorario.minuto"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of Horario modal -->


          <!-- Edit Horario Modal -->
          <b-modal ref="modalEditHorario" hide-footer title="Editar Horario" id="modalEditHorario">
                <form v-on:submit.prevent="updateHorario()">
                <div class="modal-body">
                    <div class="form-group">
                      <label for="Horario_heading">Dia</label>
                      <select v-model="currentHorario.dia" required="required" class="form-control" id="dia">
                            <option disabled value="">Introduce el dia del Horario</option>
                            <option value="LU">Lunes </option>
                            <option value="MA">Martes </option>
                            <option value="MI">Miercoles </option>
                            <option value="JU">Jueves </option>
                            <option value="VI">Viernes </option>
                            <option value="SA">Sabado </option>
                            <option value="DO">Domingo </option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="Horario_heading">Hora</label>
                      <input
                        type="number"
                        min=0
                        max=23
                        step=1
                        class="form-control"
                        id="Horario_hora"
                        placeholder="Introduce la hora del Horario"
                        v-model="currentHorario.hora"
                        required="required" >
                    </div>
                    <div class="form-group">
                      <label for="Horario_heading">Minuto</label>
                      <input
                       type="number"
                        min=0
                        max=59
                        step=1
                        class="form-control"
                        id="Horario_minuto"
                        placeholder="Introduce el minuto del Horario"
                        v-model="currentHorario.minuto"
                        required="required" >
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
                </form>
          </b-modal>
          <!-- End of edit Horario modal -->
          <div>
            <b-modal id="modalAviso" title="Aviso" ref="modalAviso" ok-only>
              <p class="my-4">{{message}}</p>
            </b-modal>
          </div>
</body>

</template>

<script type="text/javascript" src="./Horarios.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
