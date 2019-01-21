import axios from 'axios';
export default {
  name: 'Choferes',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Chofers: [],
      loading: false,
      currentChofer: {},
      message: null,
      newChofer: { 'id': null, 'nombre': null },
    }
  },
  mounted: function() {
    this.getChofers();
  },
  methods: {
    getChofers: function() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/choferes/')
        .then((response) => {
          console.log("ENtre")
          this.Chofers = response.data['results'];
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        })
    },
    getChofer: function(id) {
        this.loading = true;
        console.log(id);
        axios.get('http://127.0.0.1:8000/choferes/'+id+'/')
            .then((response) => {
              this.currentChofer = response.data;
              this.$refs.modalEditChofer.show()
              this.loading = false;
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       addChofer: function() {
        this.loading = true;
        axios.post('http://127.0.0.1:8000/choferes/',this.newChofer)
            .then((response) => {
              this.loading = false;
              this.getChofers();
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       updateChofer: function() {
        this.loading = true;
        axios.put('http://127.0.0.1:8000/choferes/'+this.currentChofer.id+'/',this.currentChofer)  
            .then((response) => {
              this.loading = false;
              this.currentChofer = response.data;
              this.message="Operacion Realizada Con Exito";
              this.$refs.modalAviso.show();
              this.getChofers();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       },
       deleteChofer: function(id) {
        this.loading = true;
        axios.delete('http://127.0.0.1:8000/choferes/'+id+'/')
            .then((response) => {
              this.loading = false;
              this.getChofers();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            })
       }
  },
}