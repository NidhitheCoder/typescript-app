import { UserActionTypes } from "./user.types";

export const setUsers = (users:any) => ({
  type: UserActionTypes.SET_USERS,
  payload: users
});


export const addUser = (user:any) => ({
  type:UserActionTypes.ADD_USER,
  payload:user
})