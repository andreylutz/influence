export const INIT_USER = 'INIT_USER';
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const actionsUser = {
  initUser: () => ({ type: INIT_USER }),
  setUser: (user) => ({ type: SET_USER, payload: user }),
  logout: () => ({ type: LOGOUT_USER }),
};
