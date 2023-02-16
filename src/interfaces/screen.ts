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
