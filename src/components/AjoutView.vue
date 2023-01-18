<template lang="">


   
    
        <form @submit.prevent="ajoutnumero">
                <input type='text' placeholder="nom" v-model="FormData.nom"/> 
                <input type='number' placeholder="numero" v-model="FormData.numero"/>  
                <button type="submit">ajt</button> 
            </form> 
    </template>
    
    
    
    <script>
   
    export default {  
    
    
        name:'FormPerso',
        components:{
           
        },  
        
    
      
            
        data(){
            return{ 
                FormData:{
                        nom:'', 
                        numero:null
                    }, 
            }
        },  
    
    
        methods:{
                    ajoutnumero() { 
                        if(this.FormData.nom == '' || this.FormData.numero == null) return  
    
    
                        if(this.$store.state.Contacts.find(Contact => Contact.nom=== this.FormData.nom)) return 
    
                        this.$store.commit('ajoutnumero', this.FormData) 
    
                       
    
                   
                        this.FormData={
                            nom:'', 
                            numero:null 
                        }
                    
                    }
            },     
        
    }
    </script>
    <style >
        .error {
            color: red
        }
    
        form {
        background-color: red;
        width: 50vw;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
    }
    
    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
    }
    
    button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #2c3e50;
        color: white;
        font-weight: bold; 
        text-align: center;
    }
    </style>