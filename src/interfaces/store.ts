export interface IUserReducer {
  id: string;
  token: string;
  email: string;
  first_name: string;
  last_name: string;
  accept_terms: boolean;
}

export default interface IStoreState {
  user: IUserReducer;
}
