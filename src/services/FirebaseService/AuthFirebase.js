import Service from '.';

// Recurso
const Auth = Service.auth;

// Operaciones
export default {
  // Realiza el Login
  // https://firebase.google.com/docs/auth/web/password-auth?hl=es_419
  async login(email, password) {
    const res = await Auth.signInWithEmailAndPassword(email, password);
    // console.log(res);
    return res.user;
  },
  // Realiza el Registro
  // https://firebase.google.com/docs/auth/web/manage-users?hl=es_419
  async register(email, password, name) {
    await Auth.createUserWithEmailAndPassword(email, password);
    await Auth.currentUser.updateProfile({ displayName: name });
    return Auth.currentUser;
  },
  // Realiza el logout
  // https://firebase.google.com/docs/auth/web/password-auth?hl=es_419
  logout() {
    return Auth.signOut();
  },
  // Realiza el login con Google
  // https://firebase.google.com/docs/auth/web/google-signin?hl=es_419
  loginGoogle() {
    // provider.addScope('https://www.googleapis.com/auth/plus.login');
    return Auth.signInWithPopup(Service.providerGoogle);
  },
  // Devuelve el usuario actual
  async getCurrentUser() {
    return Auth.currentUser;
  },
};
