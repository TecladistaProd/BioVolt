import { useFormik } from 'formik';
import React from 'react';
import PageWrapper from '../../../components/PageWrapper';

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

    </PageWrapper>
  );
}

export default Login;