import { AnyAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

export default function exampleReducer(
  state = INITIAL_STATE,
  action: AnyAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
