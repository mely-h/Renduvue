import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView  from '../views/ContactView.vue'
import JournalView from '../views/JournalView.vue' 
import ClavierView from '../views/ClavierView.vue'

const routes = [
 
  {
    path:'/Journal', 
    name:'Journal', 
    component:JournalView
  } ,
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  }, 
  {
    path:'/Clavier', 
    name:'Clavier', 
    component:ClavierView
  }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router