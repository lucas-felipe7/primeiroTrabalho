import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar
        barStyle='dark-content'
        hidden={false}
        backgroundColor='#0050A1'>
      </StatusBar>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <Text style={styles.text}>
          Câmera
        </Text>
        <Text style={styles.text}>:</Text>
      </View>
      <Image source={require('C:/aula/primeiroTrabalho/img/download.png')} style={styles.pic}></Image>
    </View >
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0068A0',
    padding: 0

  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 220,
    paddingBottom: 15,
    paddingTop: 10
  },
  pic: {
    height: 80,
    width: 100,
    marginTop: 550,
    marginLeft: 250
  }
})