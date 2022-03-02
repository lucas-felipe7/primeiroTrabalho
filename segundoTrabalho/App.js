import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image = { uri: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2018/06/alolan2018.jpg?itok=sRCApY9m" };
const imagePokemon = { uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" }
const pokebola = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png?20161126061739" }
const iconRight = { uri: "https://icon-library.com/images/pokemon-go-icon-png/pokemon-go-icon-png-0.jpg" }
const morango = { uri: "https://cdn.shopify.com/s/files/1/0041/3997/4691/products/red-juicy-strawberry-1rr_360x.png?v=1622140014" }
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.imageBackground}>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <Text style={styles.text}>Charmander</Text>
        <Text style={styles.text}>CP???</Text>
      </View>
      <Image source={imagePokemon} style={styles.imageCentral}></Image>
      <Image source={iconRight} style={styles.iconRight}></Image>
      <Image source={morango} style={styles.morango}></Image>
      <Image source={pokebola} style={styles.pokebola}></Image>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 150,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageCentral: {
    width: 250,
    height: 250,
    marginBottom: 50,
    marginLeft: 50
  },
  pokebola: {
    width: 100,
    height: 100,
    marginBottom:15
  },
  iconRight: {
    width: 75,
    height: 75,
    marginBottom: -80,
    marginLeft: 250
  },
  morango: {
    width: 75,
    height: 75,
    marginRight: 220,
  }
});

export default App;