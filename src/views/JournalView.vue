<template lang="">
    <div v-for="journals in Journal" :key="journals"> 
        <p v-if="journals.nom != ''">  
           {{journals.nom}} 
        </p> 
        <p v-else>{{journals.numero}}</p>
        {{journals.date}} 
        <button>allo </button>
        
    </div>
</template>
<script>
export default {
    name:"JournalView", 
    computed:{ 
        Journal(){
            return this.$store.state.Journals
        }
    }, 
    methods : {
        appeler(Journal){
            return this.$store.commit('appeler', Journal)
        }
    }
} 


</script>
<style >
    
</style>