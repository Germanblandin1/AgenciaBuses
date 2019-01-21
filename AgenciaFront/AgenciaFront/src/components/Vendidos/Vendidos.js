import axios from 'axios';
export default {
  name: 'Vendidos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Vendidos: [],
      Trayectos: [],
      porcentaje: 0,
      trayecto_id: null,
      loading: false,
    }
  },
  mounted: function() {
    this.getTrayectos();
  },
  methods: {
    getVendidos: function(porcentaje,trayecto_id) {
        this.loading = true;
        axios.get('http://127.0.0.1:8000/vendidos/'+porcentaje+'/trayectos/'+trayecto_id+'/')
          .then((response) => {
            this.Vendidos = response.data;
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
      },
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
    
  },
}