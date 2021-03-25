import { UserActionTypes } from "./user.types";

export const setUsers = (user:any) => ({
  type: UserActionTypes.SET_USERS,
  payload: user
});
