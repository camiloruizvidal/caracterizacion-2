<template>
    <ion-content v-if="dataArray!=null">
        <h3 >{{dataArray.length}}
            encuesta{{dataArray.length > 1 ? 's': ''}}
            realizada{{dataArray.length > 1 ? 's': ''}}
        </h3>
        <ion-button v-if="porcentaje===false" @click="enviarEncuestas" expand="full">Enviar</ion-button>
        
        <template v-if="porcentaje!==false">
        <ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
        <span>{{(porcentaje)*100}}%</span>
        <ion-progress-bar v-if="porcentaje" :value="porcentaje" buffer="0.5"></ion-progress-bar>
        </template>

        <ion-list>
            <ion-item v-for="(item,index) in dataArray" :key="index">
                <ion-label>
                    Codigo {{item.codigo}}. Registros{{item.registros.length}}
                    <br>
                    <i class="not-finish" v-if="!item.finalizado">Ficha sin finalizar</i>
                </ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
    <ion-content v-else>
        <h1>{{texto}}</h1>
    </ion-content>
    
</template>

<script>
import fun from '../Functions/index'
export default {
    watch:{
        
    },
    data()
    {
        return {
            enviadosArray:[],
            texto:'',
            enviados:0,
            porcentaje:false,
            total:0,
            enviando:false,
            url:'',
            dataArray:null,
        }
    },
    methods:{
        cleanSend(deleteData)
        {
            this.porcentaje=false;
            let temp = this.dataArray;
            deleteData.forEach(value=>{
                delete temp[value];
            })
            this.dataArray=[];
            temp.forEach(value=>{
                thiss.dataArray.push(value);
            });
            let resultado = JSON.parse(localStorage.getItem('encuestas'));
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            let idx = resultado.findIndex( user => user.id === usuario.id );
            resultado[idx].encuestas=this.dataArray;
            localStorage.setItem('encuestas',JSON.stringify(resultado));
        },
        loadData()
        {
            try {
                
            let resultado = JSON.parse(localStorage.getItem('encuestas'));
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            let idx = resultado.findIndex( user => user.id === usuario.id );
            this.dataArray=resultado[idx].encuestas;
            } catch (error) {
                //console.warn('no data')   
            }
        },
        async enviarEncuestaData(data,index)
        {
            try {
                const response = await axios.post(this.url,data)       
                this.enviadosArray[index]=true;
            } catch (error) {
                this.enviadosArray[index]=false;
                
            }finally{
                return this.enviadosArray[index];
            }
        },
        async enviarEncuestas()
        {
            let me = this;
            let total = me.dataArray.length;
            let deleteData=[];
            me.enviados=0;
            me.porcentaje=0;
            await fun.asyncForEach(me.dataArray,async function(value,index)
            {                
                if(value.finalizado){
                    let siEnvio = await me.enviarEncuestaData(value,index);
                    me.enviados=me.enviados+(siEnvio?1:0);
                    if(siEnvio){
                        deleteData.push(index);
                    }
                }
                me.porcentajes=me.enviados/total*100;
            });
            me.porcentaje=false;
            return;
            //me.cleanSend(deleteData);
            return this.$ionic.alertController
            .create({
                cssClass: '.alert-wrapper',
                header: 'Enviado '+(me.enviados/total*100)+'%',
                message: 'Se enviaron '+(me.enviados)+' de '+(total)+' registros.',
                buttons: ['ok'],
            })
            .then(a => a.present())
                    
        },
    },
    mounted()
    {
        let server = JSON.parse(localStorage.getItem('server'))
        if(server === null)
        {
            this.texto='No hay un servidor configurado'
        }
        else{
            this.texto='Cargando parametros'
            this.url = server.server+':'+server.port+'/api/v1/registros'
            this.loadData();
        }
    }

}
</script>

<style>
.not-finish{
    background-color: red;
    padding: 2px;
    border-radius: 14px;
    color: #FFF;
}
</style>