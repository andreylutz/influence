import { instance } from './index';
import { actionsUser } from '../actions/actionsUser';

export const registration = (email, password) => {
  return async (dispatch) => {
    try {
      await instance.post(`/reg/`, {
        email,
        password,
      });
      alert('Регистрация прошла успешна!');
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
      dispatch(actionsUser.initUser());
      dispatch(actionsUser.setUser(response.data));

      console.log(response);
    } catch (e) {
      alert('Вы ввели неправильное имя или пароль!');
      console.log(e.response.data);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      await instance.post(`/logout`);

      dispatch(actionsUser.logout());
      dispatch(actionsUser.setUser(''));
    } catch (e) {
      console.log(e.response.data);
    }
  };
};
