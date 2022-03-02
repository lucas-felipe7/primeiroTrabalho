import React, { Component } from "react";
import { StyleSheet, Button, StatusBar, View, Text, Image, } from "react-native";

const App = () => {

    return (

        <View style={[styles.container, { flexDirection: "column" }]}>

            <StatusBar barStyle="dar-content" hidden={false} backgroundColor="#63997a" />

            <View>
                <View style={{ backgroundColor: "#6ac5cb", justifyContent: 'space-between', }}>

                    <Text style={{ padding: 17, fontSize: 24, width: "auto", minWidth: 80, flexDirection: "row" }}>

                        Skate bar
                        &#160;
                        <Button

                            title=" ="
                            backgroundColor="#6ac5cb"
                            border="555"
                            color="#6ac5cb"
                        />
                    </Text>

                </View>
            </View>
            <View style={{ flex: 2, width: '100%', height: '100%' }} />
            <View style={{ left: 90, width: 50, paddingLeft: 190, paddingTop: 20, padding: 22, }}>
                <Image
                    source={require('./images/mais.png')}
                    style={{ width: 50, height: 50, }}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        display: "flex"
    },


});



export default App;