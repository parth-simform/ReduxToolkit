import { TextInput, TextInputProps } from 'react-native';
import React from 'react';
import { styles } from './styles';
import colors from '../../theme/Colors';

const InputField = ({ onChangeText, value, ...props }: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.black}
      {...props}
    />
  );
};

export default InputField;
