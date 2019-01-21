import axios from 'axios';
export default {
  name: 'Pasajeros',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Pasajeros: [],
      loading: false,
      currentPasajero: {},
      message: null,
      newPasajero: { 'id': null, 'nombre': null },
    }
  },
  mounted: function() {
    this.getPasajeros();
  },
  methods: {
    getPasajeros: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/pasajeros/')
        .then((response) => {
          console.log("ENtre")
          this.Pasajeros = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getPasajero: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/pasajeros/'+id+'/')
            .then((response) => {
              this.currentPasajero = response.data;
              this.$refs.modalEditPasajero.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addPasajero: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/pasajeros/',this.newPasajero)
            .then((response) => {
              this.loading = false;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getPasajeros();
            })
            .catch((err) => {
              this.loading = false;
              this.message="Error";
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       updatePasajero: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/pasajeros/'+this.currentPasajero.id+'/',this.currentPasajero)  
            .then((response) => {
              this.loading = false;
              this.currentPasajero = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getPasajeros();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       deletePasajero: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/pasajeros/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getPasajeros();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}