import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, TextInput, TouchableOpacity} from 'react-native';
import HomePage from './HomePage';
import Footer from './Footer';
import { PromiseProvider } from 'mongoose';
import { withOrientation } from 'react-navigation';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const LoginPage = ({navigation}) => {
    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState('');

    // function onAuthStateChanged(user)
    // {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect (() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber;
    // }, []);

    // if (initializing) return null;

    function signIntoUserAccount() {
        navigation.navigate('Home')
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
                const users = firebase.auth().currentUser;
                console.log(users.uid);;
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid.');
                }
                console.error(error);
            })
    }

    return (
        <ImageBackground
         source={require("../Images/StartPage.jpg")}
         style={styles.img} >
    <View>
    <Text style = {styles.text}> log
    <Text style = {styles.middleText}> in </Text>
    </Text>
    <TextInput
        style={styles.inputText}
        password={true}
        placeholder="Username/Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
    />
     <TextInput
      secureTextEntry={true}
        style={styles.inputText}
        placeholder="Password"
        onChangeText={newText2 => setPassword(newText2)}
        defaultValue={password}
    />
    <TouchableOpacity onPress={signIntoUserAccount}  style={styles.button}>
    <Text style={styles.buttonText}>
        log in
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

export default LoginPage;