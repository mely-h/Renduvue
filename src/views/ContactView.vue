<template> 
 <AjoutView/>
    <div v-for="Contact in contacts " :key="Contact.nom" > 
      
        <h1>{{ Contact.nom }}</h1>  
        <span> {{ Contact.numero }}</span>
        <button @click="appeler(Contact.nom , Contact.numero )"> allo </button> 
    </div>  

   
</template>

<script>
import AjoutView from '@/components/AjoutView.vue'

    export default  {
    name: "ContactView", 
    components:{
        AjoutView
    }, 
    computed: {
        contacts() {
            return this.$store.state.Contacts;
        }
    },
    methods: {
        appeler(nom, numero) {
            let dateClick = new Date();
            let data = {
                nom: nom,
                numero: numero,
                date: dateClick.getDate() + "/" + dateClick.getMonth() + 1 + "/" + dateClick.getFullYear() + " - " + dateClick.getHours() + "h" + dateClick.getMinutes() + "min" + dateClick.getSeconds() + "sec",
            };
            this.$store.commit("appeler", data);
        },
    },
   
}
</script>

<style>

</style>