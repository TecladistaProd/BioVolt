import { AnyAction } from "@reduxjs/toolkit";
import { LOGIN_USER } from "../types";

const INITIAL_STATE = {
  user: {
    id: "",
    token: "",
    email: "",
    first_name: "",
    last_name: "",
  },
};

interface IAction extends AnyAction {
  payload?: Partial<typeof INITIAL_STATE>;
}

function userReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
