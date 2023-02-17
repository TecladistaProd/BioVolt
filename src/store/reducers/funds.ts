import { IFundReducer } from "@interfaces/store";
import { AnyAction } from "@reduxjs/toolkit";
import { GET_FUNDS } from "../types";

const INITIAL_STATE: IFundReducer[] = [];

interface IAction extends AnyAction {
  payload?: Partial<IFundReducer>[];
}

function fundsReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case GET_FUNDS:
      return action.payload;
    default:
      return state;
  }
}

export default fundsReducer;
