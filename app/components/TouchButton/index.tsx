import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const TouchButton = ({ text, buttonStyle, textStyle, onPress }: any) => {
  const TouchableStyle = StyleSheet.flatten([styles.button, buttonStyle]);
  return (
    <TouchableOpacity style={TouchableStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchButton;
