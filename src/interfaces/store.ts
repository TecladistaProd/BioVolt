import { TFundType } from "./Server";

export interface IUserReducer {
  id: string;
  token: string;
  email: string;
  first_name: string;
  last_name: string;
  accept_terms: boolean;
}

export interface IFundReducer {
  id: string;
  type: TFundType;
  price_at_open: number;
  price_at_close: number;
  aum: number;
  vr: string;
  issue_date: number;
  ter: number;
  credits: number;
  last_purchase: number;
}

export default interface IStoreState {
  user: IUserReducer;
  funds: IFundReducer[];
}
