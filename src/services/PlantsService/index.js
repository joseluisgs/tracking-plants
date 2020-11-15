/* eslint-disable no-unused-vars */
// &filter[common_name]=beach%20strawberry
import Vue from 'vue';
import Axios from 'axios';
import Config from './PlantsServiceConfig';

// const URL_BASE = `https://trefle.io/api/v1/plants?token=${TOKEN}`;
const API_BASE_URL = 'https://trefle.io/api/v1/plants/';

// Creamos la instancia
const Service = Axios.create({
  baseURL: API_BASE_URL,
});

// configuramos el servicio
Service.defaults.headers.common.Accept = 'application/json';
Service.defaults.headers.common['Content-Type'] = 'application/json';
Service.defaults.headers.common.Authorization = `Bearer ${Config.API_TOKEN}`;
Service.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Como solo tenemos este servicio como http, se lo agregamos a Vue
Vue.prototype.$http = Service;

export default {
  Service,
};
