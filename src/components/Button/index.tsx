import React from 'react';

import { Container, ICProps, ILProps, Label } from './styles';

interface IProps extends ICProps, ILProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Label color={color}>
        {children}
      </Label>
    </Container>
  );
}

export default Button;