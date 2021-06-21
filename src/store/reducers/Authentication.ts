const INITIAL_STATE = {
  userInformation: null,
};

const AuthenticationReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case 'SET_SESSION':
      return {
        ...state,
        userInformation: payload,
      };

    default:
      return state;
  }
};

export default AuthenticationReducer;
