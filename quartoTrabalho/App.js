import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableOpacity, Alert } from "react-native";

const logo = { uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/Pok%C3%A9mon_GO_logo.png/200px-Pok%C3%A9mon_GO_logo.png' }
const handlePress = () => false
const App = () => (
  <View style={styles.container}>
    <View style={styles.primeiroBloco}>
      <Image source={logo} style={styles.imagemLogo}></Image>
    </View>
    <View style={styles.segundoBloco}>
      <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center' }}>Pokémon Trainer Club</Text>
      <TextInput style={styles.formulario} placeholder="Enter your Username"></TextInput>
      <Text style={{ marginLeft: 150, fontSize: 16, fontWeight: '500' }}>Forget your username?</Text>
      <TextInput style={styles.formulario} placeholder="Enter your Password"></TextInput>
      <Text style={{ marginLeft: 150, fontSize: 16, fontWeight: '500' }}>Forget your password?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop:25 }}>
        <Button style={styles.botao} title='Register' color='black' onPress={() => Alert.alert("Você está cadastrado")}></Button>
        <Button style={styles.botao} title='Sign In' color='black' onPress={() => Alert.alert("Você está logado")}></Button>
      </View>
    </View>
  </View >
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4FAB1'
  },
  primeiroBloco: {
    height: 250,
    marginTop: 40,
  },
  imagemLogo: {
    width: 300,
    height: 200,
    marginLeft: 45
  },
  segundoBloco: {
    height: 300,
    width: 350,
    backgroundColor: 'white',
    marginLeft: 20,
    marginTop: 50
  },
  formulario: {
    marginLeft: 18,
    marginTop: 10,
    backgroundColor: '#DADDD8',
    fontSize: 19,
    fontWeight: '700',
    width: '90%',
    alignItems: 'center',
    height: 50,
  },
});

export default App;