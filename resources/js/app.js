require('./bootstrap');
//require vue router and import vue router
window.Vue = require('vue');

// import vue router and use vue router for initial configuration
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//import  external router
import {routes} from './routes/index';

const router = new VueRouter({
    //mode history use for remove # from url
    mode:'history',
    routes
  })



Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
     router
});
