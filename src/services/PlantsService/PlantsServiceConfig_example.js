// Saca el token de
// https://trefle.io/profile#token-informations
// Renombra este fchero sin el PlantsConfig.js

// const API_TOKEN = 'token';
// Usando variables de entornos
const API_TOKEN = process.env.VUE_APP_API_TOKEN;

export default { API_TOKEN };
