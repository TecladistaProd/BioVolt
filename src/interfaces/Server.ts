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

export interface IFundModel
  extends ModelDefinition<{
    userId: number;
    type: TFundType;
    price_at_open: number;
    price_at_close: number;
    aum: number;
    vr: string;
    issue_date: number;
    ter: number;
    credits: number;
    last_purchase: number;
  }> {}
