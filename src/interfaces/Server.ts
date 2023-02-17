import { ModelDefinition } from "miragejs/-types";

export interface IUserModel
  extends ModelDefinition<{
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    accept_terms: boolean;
  }> {}

export type TFundType = "Wind" | "Solar" | "Nature";
