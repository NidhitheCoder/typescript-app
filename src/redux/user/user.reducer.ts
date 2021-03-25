import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  users: null
};

const userReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case UserActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
