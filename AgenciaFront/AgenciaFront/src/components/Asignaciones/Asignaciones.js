import axios from 'axios';
export default {
  name: 'Asignaciones',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Asignacions: [],
      Viajes: [],
      Pasajeros: [],
      loading: false,
      currentAsignacion: {},
      message: null,
      newAsignacion: { 'id': null, 'viaje': null,'pasajero': null,'npuesto': null },
    }
  },
  mounted: function() {
    this.getAsignacions();
    this.getViajes();
    this.getPasajeros();
  },
  methods: {
    getViajes: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/viajes/')
        .then((response) => {
          this.Viajes = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getPasajeros: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/pasajeros/')
        .then((response) => {
          this.Pasajeros = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getAsignacions: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/asignaciones/')
        .then((response) => {
          this.Asignacions = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getAsignacion: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/asignaciones/'+id+'/')
            .then((response) => {
              this.currentAsignacion = response.data;
              this.$refs.modalEditAsignacion.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addAsignacion: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/asignaciones/',this.newAsignacion)
            .then((response) => {
              this.loading = false;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getAsignacions();
            })
            .catch((err) => {
              this.loading = false;
              this.message=err.response.data['message'];
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       updateAsignacion: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/asignaciones/'+this.currentAsignacion.id+'/',this.currentAsignacion)  
            .then((response) => {
              this.loading = false;
              this.currentAsignacion = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getAsignacions();
            })
            .catch((err) => {
              this.loading = false;
              this.message=err.response.data['message'];
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       deleteAsignacion: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/asignaciones/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getAsignacions();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}