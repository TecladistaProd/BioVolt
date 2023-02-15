import { useFormik } from 'formik';
import React from 'react';
import Input from '@components/Input';
import PageWrapper from '@components/PageWrapper';
import { Title } from './styles';

// import { Container } from './styles';

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {}
  })
  return (
    <PageWrapper hasNav>
      <Title>
        Login
      </Title>
      <Input
        label='E-mail'
        placeholder='example@email.com'
        mb='20px'
        type='emailAddress'
        error='Error Message'
      />
      <Input
        label='Password'
        placeholder='Minimum 8 characters'
        mb='20px'
        type='password'
      />
    </PageWrapper>
  );
}

export default Login;