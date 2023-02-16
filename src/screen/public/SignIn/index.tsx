import React, { useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {signinSchema} from '@yupSchemas/user.schema';

import PageWrapper from '@components/PageWrapper';
import Input from '@components/Input';
import Button from '@components/Button';

import { SIGNIN_USER } from '@store/types';

import { PublicSSP } from '@interfaces/screen';

import { Title, SignupRow, SignupText, SignupBtn } from './styles';

const SignIn: React.FC<PublicSSP<'SignIn'>> = ({ navigation }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: async (data) => {
      const res = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if(json.message) {
        return Toast.show({
          type: 'error',
          text1: json.message,
        });
      }
      dispatch({ type: SIGNIN_USER, payload: json });
    }
  });

  const handleChangeInput = useCallback((name: keyof typeof formik.values, value: string) => {
    formik.setFieldValue(name, value || '');
  }, [formik]);

  return (
    <PageWrapper hasNav>
      <Title>
        Login
      </Title>
      <Input
        label='E-mail'
        placeholder='example@email.com'
        autoComplete='email'
        mb='20px'
        type='emailAddress'
        error={formik.errors.email}
        value={formik.values.email}
        onChange={handleChangeInput.bind(null, 'email')}
      />
      <Input
        label='Password'
        placeholder='Minimum 8 characters'
        mb='20px'
        type='password'
        error={formik.errors.password}
        value={formik.values.password}
        onChange={handleChangeInput.bind(null, 'password')}
      />
      <Button
        onPress={formik.handleSubmit}
        mt='17px'
        mb='13px'
        bgColor='primarySolid'
        color='pureWhite'>
        Login
      </Button>
      <SignupRow>
        <SignupText>
          Don’t have an account?
        </SignupText>
        <SignupBtn onPress={() => navigation.navigate('SignUp')}>
          <SignupText>Sign up</SignupText>
        </SignupBtn>
        <SignupText>
          here
        </SignupText>
      </SignupRow>
    </PageWrapper>
  );
}

export default SignIn;