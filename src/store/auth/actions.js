import AuthService from '@/services/FirebaseService/AuthFirebase';

export default {
  async registerUser({ commit }, { email, password, name }) {
    try {
      const user = AuthService.register(email, password, name);

      commit('setUser', user);
    } catch (error) {
      // TODO: remove this console
      console.error(error);
    }
  },

  // async loginUser({ commit }, { email, password }) {
  //   try {
  //     const user = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password);
  //     commit('setUser', user.user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};
