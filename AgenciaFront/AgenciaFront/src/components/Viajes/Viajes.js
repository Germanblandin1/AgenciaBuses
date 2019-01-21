import axios from 'axios';
export default {
  name: 'Viajes',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Viajes: [],
      Trayectos: [],
      Horarios: [],
      Buses: [],
      Choferes: [],
      loading: false,
      currentViaje: {},
      message: null,
      newViaje: { 'id': null, 'trayecto': null,'horario': null,'chofer': null,'bus': null },
    }
  },
  mounted: function() {
    this.getViajes();
    this.getTrayectos();
    this.getHorarios();
    this.getBuses();
    this.getChoferes();
  },
  methods: {
    getTrayectos: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/trayectos/')
        .then((response) => {
          this.Trayectos = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getHorarios: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/horarios/')
        .then((response) => {
          this.Horarios = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getBuses: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/buses/')
        .then((response) => {
          this.Buses = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getChoferes: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/choferes/')
        .then((response) => {
          this.Choferes = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
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
    getViaje: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/viajes/'+id+'/')
            .then((response) => {
              this.currentViaje = response.data;
              this.$refs.modalEditViaje.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addViaje: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/viajes/',this.newViaje)
            .then((response) => {
              this.loading = false;
              this.message="Se ha agregado Correctamente";
              this.$refs.modalAviso.show();
              this.getViajes();
            })
            .catch((err) => {
              this.loading = false;
              this.message=err.response.data['message'];
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       updateViaje: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/viajes/'+this.currentViaje.id+'/',this.currentViaje)  
            .then((response) => {
              this.loading = false;
              this.currentViaje = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getViajes();
            })
            .catch((err) => {
              this.loading = false;
              this.message=err.response.data['message'];
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       deleteViaje: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/viajes/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getViajes();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}