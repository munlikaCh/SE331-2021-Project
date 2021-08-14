import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetWorkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService.js'
import GStore from '@/store'
import DocComm from '@/views/DocComm.vue'
import Start from '@/views/Start.vue'

//import server from '@/server.js'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return EventService.getEvent(to.params.id) //Return and params.id
      .then((response) =>{
        //Still need to set the data here
        GStore.event = response.data //<--- Store the event
      })
      .catch((error)=>{
        if (error.reponse && error.response.status == 404){
          return{//<---return
          name:'404Resource',
          params:{ resource:'event'}
          }
        }
        else{
          return {name: 'NetworkError'} // <-- Return
        }
      })
    },
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        props: true,
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        props: true,
        component: EventEdit
      },
      {
        path: 'dcom',
        name: 'DocComm',
        props: true,
        component: DocComm
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },{
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }
    else{
      return{
        top:0
      }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() =>{
  NProgress.done()
})

export default router
