import axios from 'axios';
export default {
  name: 'Listado',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Listado: [],
      Respuesta2: [],
      loading: false,
    }
  },
  mounted: function() {
  
  },
  methods: {
    getListado: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/listado/')
        .then((response) => {
          this.Listado = response.data;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getVendidos: function(trayecto_id,porcentaje) {
        this.loading = true;
        axios.get('http://127.0.0.1:8000/vendidos/'+porcentaje+'/trayectos/'+trayecto_id+'/')
          .then((response) => {
            this.Respuesta2 = response.data;
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
      },
    
  },
}