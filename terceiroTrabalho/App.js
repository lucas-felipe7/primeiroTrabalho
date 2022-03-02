import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const charizard = { uri: "https://static.wikia.nocookie.net/anicrossbr/images/e/e5/006Charizard_AG_anime.png/revision/latest/scale-to-width-down/328?cb=20160302233731&path-prefix=pt-br" }
const iconUm = { uri: "https://www.pikpng.com/pngl/b/53-533826_pokemon-go-icon-png-pokemon-go-custom-icon.png" }
const iconDois = { uri: "https://cdn.icon-icons.com/icons2/851/PNG/512/poke_trainer_three_star_icon-icons.com_67512.png" }
const iconTres = { uri: "https://cdn.icon-icons.com/icons2/851/PNG/512/pokemon_articuro_icon-icons.com_67526.png" }
const check = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/512px-Eo_circle_grey_checkmark.svg.png?20200417135205" }

const App = () => (
  <View style={styles.container}>
    <View style={styles.primeiroBloco}>
      <Text style={styles.titulo}>CP 928</Text>
      <Image source={charizard} style={styles.imagemCentral}></Image>
    </View>
    <View style={styles.segundoBloco}>
      <Text style={styles.nome}>Charizard</Text>
      <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "700", marginTop: 5 }}> HP 81/01</Text>
      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <Image source={iconUm} style={styles.imagemUm}></Image>
        <Image source={iconDois} style={styles.imagemDois}></Image>
        <Image source={iconTres} style={styles.imagemTres}></Image>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: "700", marginLeft: 48 }}>100kg</Text>
        <Text style={{ fontSize: 17, fontWeight: "700", marginLeft: 66 }}>Fire Power</Text>
        <Text style={{ fontSize: 17, fontWeight: "700", marginLeft: 54 }}>1.90m</Text>
      </View>
    </View>
    <View style={styles.terceiroBloco}>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={{ flexDirection: 'column', marginLeft: 30 }}>
          <Text style={{ fontSize: 19, fontWeight: '700' }}>Wing Attack</Text>
          <Text style={{ fontSize: 19, fontWeight: '700', marginTop: 35 }}>Fire Blast</Text>
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 200 }}>
          <Text style={{ fontSize: 19, fontWeight: '700' }}>6</Text>
          <Text style={{ fontSize: 19, fontWeight: '700', marginTop: 35, }}>60</Text>
        </View>
      </View>
      <Image source={check} style={styles.checkLogo}></Image>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC8AD'
  },
  primeiroBloco: {
    width: '100%',
    height: 250,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'black',
  },
  imagemCentral: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
  },
  segundoBloco: {
    marginTop: 60,
    width: '100%',
    height: 200,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  imagemUm: {
    width: 50,
    height: 50,
    marginLeft: 50,
  },
  imagemDois: {
    width: 50,
    height: 50,
    marginLeft: 75,
  },
  imagemTres: {
    width: 50,
    height: 50,
    marginLeft: 75,
  },
  terceiroBloco: {
    flex: 1,
    width: '100%',
    height: 150,
  },
  checkLogo: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 170
  }
});

export default App;