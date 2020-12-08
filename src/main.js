import Vue from 'vue';
// Algunas librerías
import vClickOutside from 'v-click-outside';
import * as rules from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
// Importamos nuestro servicios de Firebase
// eslint-disable-next-line no-unused-vars
// import Firebase from './services/FirebaseService';
import VueMoment from 'vue-moment';
import moment from 'moment'; // Moment en espñol
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Mis estilos
import './assets/styles';

// Mis reglas
// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.use(vClickOutside);

// moment
require('moment/locale/es');

Vue.use(VueMoment, { moment });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
