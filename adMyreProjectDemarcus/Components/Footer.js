import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Footer = ({navigation}) => {

   

    return (
           <View >
           <TouchableOpacity  style={styles.button} >
           <Text style={styles.buttonText}>
          log in
           </Text>
           </TouchableOpacity>
           <View

/>
           <TouchableOpacity  style={styles.button2}>
           <Text style={styles.buttonText}>
          sign up
           </Text>
           </TouchableOpacity>
           </View>    
        

            
    );
    }

    const styles = StyleSheet.create({
        button: {
        
            backgroundColor: "white",
            width: 365,
            alignItems: 'center',
            height: 80,
            marginTop: 60,
            marginBottom: 20,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 35,
            borderWidth: 1,
            
        },

        button2: {
            backgroundColor: "#FD8686",
            width: 365,
            alignItems: 'center',
            height: 80,
            marginTop: 20,
            marginBottom: 40,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 35,
            borderWidth: 1,
        },


        buttonText: {
            alignItems: 'center',
            color: 'black',
            fontSize: 30,
            fontFamily: "JacquesFrancois-Regular",

        },

        

    });

    export default Footer;