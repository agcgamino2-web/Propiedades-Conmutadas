const app = Vue.createApp({
    data() {
        return {
            nuevo: {
                nombre: '',
                telefono: '',
                categoria: ''
            },
            contactos: []
        };
    },
    methods: {
        agregarContacto() {
            if (this.nuevo.nombre && this.nuevo.telefono && this.nuevo.categoria) {
                this.contactos.push({
                    nombre: this.nuevo.nombre,
                    telefono: this.nuevo.telefono,
                    categoria: this.nuevo.categoria,
                    mensajes: 0,
                    llamadas: 0
                });
                this.nuevo.nombre = '';
                this.nuevo.telefono = '';
                this.nuevo.categoria = '';
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        }
    },
    computed: {
        totalContactos() {
            return this.contactos.length;
        },
        totalMensajes() {
            return this.contactos.reduce((total, c) => total + c.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((total, c) => total + c.llamadas, 0);
        }
    }
});

app.mount("#app");