import { createStore } from 'vuex'

export default createStore({
  state: { 
    Journals:[

    ] , 
    Contacts:[
      {
        nom: "papa",
        numero: 987897
      }, 
      {
        nom: "maman",
        numero: 987678
      },
      {
        nom: "yas",
        numero: 90909
      }
    ]

    
  },


  getters: {
  },

  mutations: {

    appeler(state, Journal) 
    { 
      
      state.Journals.push(Journal)
    }  , 

    
    ajoutnumero(state, Contact)
    {
    state.Contacts.push(Contact) 
 
 
     } , 
    
    


  },
  actions: {
  },
  modules: {
  }
})
