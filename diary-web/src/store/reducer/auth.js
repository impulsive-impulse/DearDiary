import * as actionsTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  };
};
const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const authLogout = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.AUTH_START:
      return authStart(state, action);
    case actionsTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionsTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionsTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
