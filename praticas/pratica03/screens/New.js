import React from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

function New() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Home</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType="default"
      />
      <Text>Status</Text>
      <Switch />
      <Button title="Salvar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default New;
