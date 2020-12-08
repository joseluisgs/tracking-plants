// Firebase
// Mi Plantilla genérica
import firebase from 'firebase/app'; // mejor que poner import firebase from 'firebase';
// Firebase y sus servicios
import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/storage';
import FirebaseConfig from './FirebaseConfig'; // Mejor para desplegar build

// Configuramos firebase desde nuestro fichero de FirebaseConfig.js
// Para desplegarlo en Heroku, esta vez es mejor hacerlo así porque al ser un cliente compilado
// Ya lee las variables
const firebaseConfig = FirebaseConfig;

// Inicializar Firebase. Es opcional guardarlo en una constante, si lo hago es para imprimirlo
const defaultProject = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Elementos de Firebase a usar (Cargamos los que vayamos a usar)
const db = firebase.firestore(); // Base de datos en tiempo real
// const auth = firebase.auth(); // Autenticación
// const storage = firebase.storage(); // Almacenamiento
// Autenticación de Google, poner uno por método de identificación. Se deb eactivar en la consola de Firebase
// const providerGoogle = new firebase.auth.GoogleAuthProvider();
// usuario actual
// const user = auth.currentUser;

// Colecciones de documentos a usar
const plantsCollection = db.collection('my-plants');
// const usersCollection = db.collection('users');
// const likesCollection = db.collection('likes');

// imprimimos el nombre del proyecto, esto espor depurar, luego quitar si se quiere
console.log(`⚑ Firebase -> ${defaultProject.name} ✓`);

// Exportamos lo que necesitemos
export default {
  db,
  // auth,
  // user,
  // storage,
  // providerGoogle,
  plantsCollection,
  // usersCollection,
  // likesCollection,
};
