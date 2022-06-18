export const INIT_USER = 'INIT_USER';
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const actionsUser = {
  initUser: () => ({ type: INIT_USER }),
  setUser: () => ({ type: SET_USER }),
  logout: () => ({ type: LOGOUT_USER }),
};
