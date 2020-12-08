// Configuración de firebase si lo quieresponer oculto
// https://firebase.google.com/docs/web/setup?hl=es

export default {

  // Desde el JScript
  // apiKey:
  // authDomain:
  // databaseURL:
  // projectId:
  // storageBucket:
  // messagingSenderId:
  // appId:

  // Dede las variables de entrono
  apiKey: process.env.VUE_APP_FIRE_API_KEY,
  authDomain: process.env.VUE_APP_FIRE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIRE_DATABASE_URL,
  projectId: `${process.env.VUE_APP_FIRE_PROJECT_ID}`,
  storageBucket: process.env.VUE_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIRE_APP_ID,
};
