import {
  CHANGE_IS_LOADING, CHANGE_REDIRECTION, MESSAGE_POPUP, PAGE_RELOAD,
} from '../actions/utils';

export const initialState = {
  pageReload: false,
  redirection: {},
  messagePopUp: '',
  isLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PAGE_RELOAD:
      return {
        ...state,
        pageReload: !state.pageReload,
      };

    case CHANGE_REDIRECTION:
      return {
        ...state,
        redirection: action.payload,
      };

    case MESSAGE_POPUP:
      return {
        ...state,
        messagePopUp: action.payload,
      };

    case CHANGE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};

export default reducer;
