import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, TextInput, TouchableOpacity} from 'react-native';
import HomePage from './Homepage';
import Footer from './Footer';
import { PromiseProvider } from 'mongoose';
import { withOrientation } from 'react-navigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SignUp = ({navigation}) => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    // checking that a user is logged in or not
    // handle user state changes

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    // i literally have no idea what this does but i put it in bc it works i think
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    // no user alr, create new acct
     function createUser ( ) {
        auth()
            .createUserWithEmailAndPassword(email,password) // values email and password from input
            .then(() => {
                console.log('User account created & signed in!');
            })

         
        // error cases
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('Email is already in use.');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('Email address is invalid.');
            }

            console.error(error);
        });
    }

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
            value = {fullName}
            onChangeText={fullName => setFullName(fullName)}
            defaultValue={fullName}
        />
    <TextInput
        style={styles.inputText}
        placeholder="Email"
        value = {email}
        onChangeText={email => setEmail(email)}
        defaultValue={email}
    />
     <TextInput
        style={styles.inputText}
        placeholder="Password"
        value ={password}
        onChangeText={password => setPassword(password)}
        defaultValue={password}
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
        marginTop: 80,  
       
      },

      middleText: {
        fontSize: 40,
        color: "#FD8686",
        fontFamily: 'JacquesFrancois-Regular',
        paddingBottom: 120,
      },
    });

export default SignUp;