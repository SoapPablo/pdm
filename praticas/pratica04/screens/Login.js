import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

function Login(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        mode="outlined"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={props.onLogin}>Entrar </Button>
    </View>
  );
}

export default Login;
