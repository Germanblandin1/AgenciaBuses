import axios from 'axios';
export default {
  name: 'Buses',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Buss: [],
      loading: false,
      currentBus: {},
      message: null,
      newBus: { 'id': null, 'nombre': null },
    }
  },
  mounted: function() {
    this.getBuss();
  },
  methods: {
    getBuss: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/buses/')
        .then((response) => {
          console.log("ENtre")
          this.Buss = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getBus: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/buses/'+id+'/')
            .then((response) => {
              this.currentBus = response.data;
              this.$refs.modalEditBus.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addBus: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/buses/',this.newBus)
            .then((response) => {
              this.loading = false;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getBuss();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       updateBus: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/buses/'+this.currentBus.id+'/',this.currentBus)  
            .then((response) => {
              this.loading = false;
              this.currentBus = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getBuss();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       deleteBus: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/buses/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getBuss();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}