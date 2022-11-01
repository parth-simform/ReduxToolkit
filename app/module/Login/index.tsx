import { View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { InputField, TouchButton } from '../../components';
import { Strings } from '../../constants';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          onChangeText={setEmail}
          value={email}
          placeholder={Strings.email}
        />
        <InputField
          onChangeText={setPassword}
          value={password}
          placeholder={Strings.password}
          secureTextEntry
        />
        <View>
          <TouchButton onPress={() => console.log('1122')} text={'Login'} />
        </View>
      </View>
    </View>
  );
};

export default Login;
