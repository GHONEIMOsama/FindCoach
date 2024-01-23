export default {
  /**
   * Setter for state loginInfos.
   * @param {*} state
   * @param {*} payload
   */
  setLoginInfos(state, payload) {
    state.loginInfos = payload;
  },
  /**
   * Setter for state isLoggedIn.
   * @param {*} state
   * @param {*} payload
   */
  setIsLoggedIn(state, payload) {
    state.isLoggedIn = payload;
  },
};
