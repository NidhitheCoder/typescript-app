import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  users: []
};

const userReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case UserActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload
      };
      case UserActionTypes.ADD_USER:
        return{...state,
        users:[...state.users,action.payload]
        }
    default:
      return state;
  }
};

export default userReducer;
