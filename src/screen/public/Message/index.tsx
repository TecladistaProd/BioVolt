import { PublicSSP } from '@interfaces/screen';
import React, { useEffect } from 'react';

import { Container, Text } from './styles';

const Message: React.FC<PublicSSP<'Message'>> = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('SignIn'), 3500)
  }, [route])
  return (
    <Container>
      <Text>
        {route.params.message}
      </Text>
    </Container>
  );
}

export default Message;