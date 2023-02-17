import React, { useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { useFormik } from 'formik';

import {signupSchema} from '@yupSchemas/user.schema';

import PageWrapper from '@components/PageWrapper';
import Input from '@components/Input';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';

import { PublicSSP } from '@interfaces/screen';

import {
  Title,
  SignInRow,
  SignInText,
  SignInBtn,
  SignInLabel,
  Dash,
  TermsRow,
  TermsText,
  TermsTextBold,
  ErrorTerms
} from './styles';

const SignUp: React.FC<PublicSSP<'SignUp'>> = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      accept_terms: false,
    },
    validationSchema: signupSchema,
    onSubmit: async (data) => {
      const res = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if(json.message) {
        navigation.navigate('Message', {
          message: json.message
        })
      }
    }
  });

  const handleChangeInput = useCallback((name: keyof typeof formik.values, value: string | boolean) => {
    formik.setFieldValue(name, value || '');
  }, [formik]);

  return (
    <PageWrapper
      title={
        <>
          <Dash/>
          <Dash/>
          <Dash/>
        </>
      }
      hasNav
      hasBack>
      <Title>
        Create your account
      </Title>
      <Input
        label='First Name'
        placeholder='John'
        autoCapitalize='words'
        mb='20px'
        type='name'
        error={formik.errors.first_name}
        value={formik.values.first_name}
        onChange={handleChangeInput.bind(null, 'first_name')}
      />
      <Input
        label='Last Name'
        placeholder='doe'
        autoCapitalize='words'
        mb='20px'
        type='name'
        error={formik.errors.last_name}
        value={formik.values.last_name}
        onChange={handleChangeInput.bind(null, 'last_name')}
      />
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
        mb='16px'
        type='password'
        error={formik.errors.password}
        value={formik.values.password}
        onChange={handleChangeInput.bind(null, 'password')}
      />
      <TermsRow>
        <Checkbox
          checked={formik.values.accept_terms}
          onChange={handleChangeInput.bind(null, 'accept_terms')}
        />
        <TermsText>
          {`I am over 18 years of age and I have read and agree to the `}
          <TermsTextBold>Terms of Service</TermsTextBold> and <TermsTextBold>Privacy policy.</TermsTextBold>
        </TermsText>
      </TermsRow>
      <ErrorTerms>
        {formik.errors.accept_terms}
      </ErrorTerms>
      <Button
        onPress={formik.handleSubmit}
        mt='32px'
        mb='13px'
        bgColor='primarySolid'
        color='pureWhite'>
        Create account
      </Button>
      <SignInRow>
        <SignInText>
          Already have an account?
        </SignInText>
        <SignInBtn onPress={() => navigation.navigate('SignIn')}>
          <SignInLabel>Log in Here</SignInLabel>
        </SignInBtn>
      </SignInRow>
    </PageWrapper>
  );
}

export default SignUp;