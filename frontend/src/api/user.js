import { instance } from './index';
import { actionsUser } from '../actions/actionsUser';

export const registration = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`/reg/`, {
        email,
        password,
      });
      alert('Регистрация прошла успешна!');

      localStorage.setItem('token', JSON.stringify(response));

      dispatch(actionsUser.setUser(response.data));
      dispatch(actionsUser.initUser());
    } catch (e) {
      alert('Вы ввели неправильные данные!');
      console.log(e.response.data);
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`/auth`, {
        email,
        password,
      });

      localStorage.setItem('token', JSON.stringify(response));

      dispatch(actionsUser.setUser(response.data));
      dispatch(actionsUser.initUser());
    } catch (e) {
      alert('Вы ввели неправильное имя или пароль!');
      console.log(e.response.data);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      if (localStorage.getItem('token')) {
        const user = localStorage.getItem('token');

        dispatch(actionsUser.setUser(JSON.parse(user)));
        dispatch(actionsUser.initUser());
      } else {
        dispatch(actionsUser.logout());
      }
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
