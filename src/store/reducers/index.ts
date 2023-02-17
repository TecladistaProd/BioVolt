import { combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import funds from "./funds";

export default combineReducers({
  user,
  funds,
});
