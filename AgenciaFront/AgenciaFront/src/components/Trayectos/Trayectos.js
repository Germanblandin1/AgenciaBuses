import axios from 'axios';
export default {
  name: 'Trayectos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Trayectos: [],
      loading: false,
      currentTrayecto: {},
      message: null,
      newTrayecto: { 'id': null, 'origen': null,'destino': null },
    }
  },
  mounted: function() {
    this.getTrayectos();
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
    getTrayecto: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/trayectos/'+id+'/')
            .then((response) => {
              this.currentTrayecto = response.data;
              this.$refs.modalEditTrayecto.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addTrayecto: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/trayectos/',this.newTrayecto)
            .then((response) => {
              this.loading = false;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getTrayectos();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       updateTrayecto: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/trayectos/'+this.currentTrayecto.id+'/',this.currentTrayecto)  
            .then((response) => {
              this.loading = false;
              this.currentTrayecto = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getTrayectos();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       deleteTrayecto: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/trayectos/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getTrayectos();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}