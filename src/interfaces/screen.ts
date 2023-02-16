import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PublicStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Message: {
    message: string;
  };
};

export type PublicSSP<T extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, T>;

export type PrivateStackParamList = {
  Home: undefined;
  FundDetails: {
    id: string;
  };
};

export type PrivateSSP<T extends keyof PrivateStackParamList> =
  NativeStackScreenProps<PrivateStackParamList, T>;
