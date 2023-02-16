import React, { useMemo, useState } from 'react';
import { TextInput } from 'react-native';

import Eye from '@assets/icons/Eye.svg';

import { Container, TextField, Label, Error, FieldContainer, EyeBtn } from './styles';

interface IProps {
  placeholder?: string;
  label: string;
  error?: string;
  mb?: string;
  type?: React.ComponentProps<typeof TextInput>['textContentType'],
  autoCapitalize?: React.ComponentProps<typeof TextInput>['autoCapitalize'];
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<IProps> = ({ placeholder, label, error, mb, type, autoCapitalize, onChange }) => {
  const isPass = useMemo(() => !!(type && type.toLowerCase().match('password')), [type]);
  const [show, setShow] = useState(false);
  return (
    <Container mb={mb}>
      <Label>
        {label}
      </Label>
      <FieldContainer>
        <TextField
          textContentType={type}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize || 'none'}
          secureTextEntry={isPass && !show}
          onChangeText={onChange}
        />
        {
          isPass && <EyeBtn onPress={setShow.bind(null, i => !i)}>
          <Eye width='20px' height='20px'/>
        </EyeBtn>
        }
      </FieldContainer>
      {
        !!error && <Error>
        {error}
      </Error>
      }
    </Container>
  );
}

export default Input;