<template > 

 
    <div class="clavier ">  
      <p v-if ="numeroExists == false">{{ number }}</p>
      <p v-if ="numeroExists == true ">{{ numeroOf }}</p>
        <nav> {{ clavier }}</nav>
        <div> <button @click="increment(1)">1</button> 
           <button @click="increment(2)">2</button> 
          <button @click="increment(3)">3</button> 
       </div>
        <div> <button @click="increment(4)">4</button> 
           <button @click="increment(5)">5</button> 
          <button @click="increment(6)">6</button> 
        </div>
        <div> <button @click="increment(7)">7</button> 
           <button @click="increment(8)">8</button> 
           <button @click="increment(9)">9</button>
        </div>
        <div> <button @click="retour()" >supp </button> 
          <button  @click="increment(0)">0</button> 
        <button @click="ajouterjournal(numeroOf, number)"> Allo </button>
        </div>
  </div> 

</template> 


<script>
export default { 
  data(){
        return  {
          number:"",
          numeroOf:"", 
          clavier:"", 
          numeroExists:false  
  
     } 
  }, 

  methods : {
    increment(num){
     this.number=this.number+num 
     for(let i=0; i<this.$store.state.Contacts.length; i++)
     if (this.number==this.$store.state.Contacts[i].numero){
      this.numeroOf=this.$store.state.Contacts[i].nom 
      this.numeroExists=true 
      return
     } else {
      this.numeroExists=false
     } 
     console.log(this.numeroExists)
    }, 
    retour(){
      this.number=this.number.slice(0,-1)
    }, 
    ajouterjournal(nom , numero ){
      //this.number.push(this.Journal)
      this.Journal={
        time:''
      } 
               let dateClick = new Date() 
                let off = {
                    nom:nom, 
                    numero:numero, 
                    date: dateClick.getDate() + '/' + dateClick.getMonth()+1 + '/' + dateClick.getFullYear() + ' - ' + dateClick.getHours() + "h" + dateClick.getMinutes() + 'min' + dateClick.getSeconds() + 'sec',
                } 
     
                this.$store.commit('appeler', off ) 
             }
  } 
}
</script> 

<style >  


button 
{
  display: inline-block;
        background-color: #e1dee6;
        border-radius: 70%;
        border: 4px double #cccccc;
        color: #eeeeee;
        text-align: center;
        font-size: 20px;
        padding: 20px;
        width: 70px; 
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px; 
        text-align: center;
      
}
div{
  gap:30px; 
} 

nav{
  border-style: solid ; 
  
}
    
</style>