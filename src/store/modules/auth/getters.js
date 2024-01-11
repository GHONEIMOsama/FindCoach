import { auth } from "@/firebase";

export default {
  getIsLoggedIn(state) {
    return state.isLoggedIn;
  },
  async getCurrentUser() {
    await auth.authStateReady();
    return auth.currentUser;
  },
};
