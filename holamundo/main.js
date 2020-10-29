const app = Vue.createApp({
    data(){
        return {
            titulo:'Mi banco con vue',
            cantidad:1000,
            enlace:'https://jw.org',
            estado: true,
            servicios: ['Transferencias', 'Pagos', 'Giros', 'Recargas'],
            desactivar: false
        }
    },
    methods:{
        agregarSaldo(){
            this.cantidad += 100
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar = true
                alert('saldo en cero')
                return
            }
            this.cantidad -= valor
        }
    },
    computed:{/* Siempre deben retornar alguna información osea debes usar Return*/
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})