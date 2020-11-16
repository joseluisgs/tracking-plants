import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Mis estilos
import './assets/styles';

// Importamos nuestro servicios de Firebase
// eslint-disable-next-line no-unused-vars
import Firebase from './services/FirebaseService';

Vue.use(vClickOutside);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
