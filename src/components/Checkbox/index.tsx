import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import theme from '../../style/theme';
// import { Container } from './styles';

interface IProps {
  onChange: (value: boolean) => void;
  checked: boolean;
}

const Checkbox: React.FC<IProps> = ({ checked, onChange }) => {
  return (
    <BouncyCheckbox
      isChecked={checked}
      size={20}
      fillColor={theme.colors.primarySolid}
      unfillColor={theme.colors.pureWhite}
      iconStyle={{ borderRadius: 2 }}
      innerIconStyle={{ 
        borderWidth: 2,
        borderColor: checked ? theme.colors.primarySolid : theme.colors.gray_2,
        borderRadius: 2 }}
      onPress={onChange}
    />
  );
}

export default Checkbox;