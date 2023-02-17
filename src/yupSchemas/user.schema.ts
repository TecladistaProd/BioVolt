import * as Yup from "yup";

import {
  INVALID_EMAIL_FORMAT,
  MIN_8_CHARACTER,
  REQUIRED_FIELD,
} from "../constants/yupMessages";

export const signinSchema = Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL_FORMAT).required(REQUIRED_FIELD),
  password: Yup.string().min(8, MIN_8_CHARACTER).required(REQUIRED_FIELD),
});

export const signupSchema = signinSchema.shape({
  first_name: Yup.string().required(REQUIRED_FIELD),
  last_name: Yup.string().required(REQUIRED_FIELD),
  accept_terms: Yup.boolean().required(REQUIRED_FIELD).isTrue(REQUIRED_FIELD),
});
