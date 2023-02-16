import { IUserReducer } from "@interfaces/store";
import { AnyAction } from "@reduxjs/toolkit";
import { SIGNIN_USER } from "../types";

const INITIAL_STATE: IUserReducer = {
  id: "1",
  token: "askdnasjnjnwe anjnasjnajnasaskdnajks adnasn",
  email: "",
  first_name: "",
  last_name: "",
  accept_terms: false,
};

interface IAction extends AnyAction {
  payload?: Partial<IUserReducer>;
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
