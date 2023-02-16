import { AnyAction } from "@reduxjs/toolkit";
import { SIGNIN_USER } from "../types";

const INITIAL_STATE = {
  user: {
    id: "",
    token: "",
    email: "",
    first_name: "",
    last_name: "",
    accept_terms: false,
  },
};

interface IAction extends AnyAction {
  payload?: Partial<typeof INITIAL_STATE>;
}

function userReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
