import axios from 'axios';
export default {
  name: 'Horarios',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Horarios: [],
      loading: false,
      currentHorario: {},
      message: null,
      newHorario: { 'id': null, 'dia': null,'hora': null,'minuto': null },
    }
  },
  mounted: function() {
    this.getHorarios();
  },
  methods: {
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
    getHorario: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/horarios/'+id+'/')
            .then((response) => {
              this.currentHorario = response.data;
              this.$refs.modalEditHorario.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addHorario: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/horarios/',this.newHorario)
            .then((response) => {
              this.loading = false;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getHorarios();
            })
            .catch((err) => {
              this.loading = false;
              this.message=err.response.data['message'];
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       updateHorario: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/horarios/'+this.currentHorario.id+'/',this.currentHorario)  
            .then((response) => {
              this.loading = false;
              this.currentHorario = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getHorarios();
            })
            .catch((err) => {
              this.loading = false;
              this.message=err.response.data['message'];
              this.$refs.modalAviso.show();
              console.log(err);
            })
       },
       deleteHorario: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/horarios/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getHorarios();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}