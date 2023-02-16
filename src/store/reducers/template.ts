import { AnyAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

interface IAction extends AnyAction {
  payload?: Partial<typeof INITIAL_STATE>;
}

function exampleReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    default:
      return state;
  }
}

export default exampleReducer;
