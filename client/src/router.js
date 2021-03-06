import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/inmates',
      name: 'InmatesList',
      component: () =>
        import(/* webpackChunkName: "inmates" */ './views/inmates_list.vue'),
      meta: {
        title: 'Inmates'
      }
    },
    {
      path: '/inmates/add',
      name: 'AddInmate',
      component: () =>
        import(/* webpackChunkName: "inmates" */ './views/add_inmate.vue'),
      meta: {
        title: 'Add Inmate'
      }
    },
    {
      path: '/inmate/:id',
      name: 'EditInmate',
      component: () =>
        import(/* webpackChunkName: "inmates" */ './views/edit_inmate.vue'),
      meta: {
        title: 'Edit Inmate'
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
