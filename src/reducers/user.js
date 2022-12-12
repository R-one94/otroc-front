import {
  AUTHENT_ERROR, AUTHENT_SUCCESS, CHANGE_CUSTOM_INPUT, LOGOUT, SAVE_USER_PROFIL,
} from '../actions/user';

export const initialState = {
  email: 'otroc1@oclock.io',
  password: 'otroc',
  token: null,
  pseudo: '',
  isLogged: false,
  message: '',
  firstname: '',
  lastname: '',
  zipcode: '',
  phoneNumber: '',
  profil: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CUSTOM_INPUT:
      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };
    case AUTHENT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        password: '',
        email: '',
        token: action.payload.token,
      };
    case AUTHENT_ERROR:
      return {
        ...state,
        message: "Erreur lors de l'identification",
      };
    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        token: null,
        isLogged: false,
        message: '',
        pseudo: '',
      };
    case SAVE_USER_PROFIL:
      return {
        ...state,
        profil: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
