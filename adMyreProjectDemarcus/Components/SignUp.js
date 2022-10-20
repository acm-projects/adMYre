import React, { useState } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, TextInput, TouchableOpacity} from 'react-native';
import HomePage from './Homepage';
import Footer from './Footer';
import { PromiseProvider } from 'mongoose';
import { withOrientation } from 'react-navigation';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SignUp = ({navigation}) => {
    
const [text, setText] = useState('');
const [text2, setText2] = useState('');
const [text3, setText3] = useState('');
    return (
        <ImageBackground
         source={require("../Images/StartPage.jpg")}
         style={styles.img} >
    <View>
    <Text style = {styles.text}> sign
    <Text style = {styles.middleText}> up </Text>
    </Text>
    <TextInput
        style={styles.inputText}
        placeholder="Full Name"
        onChangeText={newText => setText3(newText)}
        defaultValue={text3}
    />
    <TextInput
        style={styles.inputText}
        placeholder="Username/Email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
    />
     <TextInput
        style={styles.inputText}
        placeholder="Password"
        onChangeText={newText2 => setText2(newText2)}
        defaultValue={text2}
    />
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
    <Text style={styles.buttonText}>
        sign up
         </Text>   
    </TouchableOpacity>
    </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    button: {
    
        backgroundColor: "#2A622C",
        width: 365,
        alignItems: 'center',
        height: 80,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#2A622C",
        color: "red",
        alignItems: 'center',
       
        
    },

    buttonText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
        fontFamily: "JacquesFrancois-Regular",

    },

    img: {
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center',
    },

    inputText: {
        width: 365,
        height: 70,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderRadius: 35,
        borderWidth: 1,
        fontSize: 25,
        marginBottom: 30 ,
        fontFamily: 'JacquesFrancois-Regular',

    },
    text: {
        fontSize: 40,
        color: "white",
        fontFamily: 'JacquesFrancois-Regular',
        paddingBottom: 120,
        marginTop: 50,  
       
      },

      middleText: {
        fontSize: 40,
        color: "#FD8686",
        fontFamily: 'JacquesFrancois-Regular',
        paddingBottom: 120,
      },
    });

export default SignUp;