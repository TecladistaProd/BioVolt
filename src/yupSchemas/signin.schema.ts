import * as Yup from "yup";

import {
  INVALID_EMAIL_FORMAT,
  MIN_8_CHARACTER,
  REQUIRED_FIELD,
} from "../constants/yupMessages";

export default Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL_FORMAT).required(REQUIRED_FIELD),
  password: Yup.string().min(8, MIN_8_CHARACTER).required(REQUIRED_FIELD),
});
