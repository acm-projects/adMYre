import React, { useState,useEffect, useId } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, TextInput, TouchableOpacity,  EventSubscriptionVendor} from 'react-native';
import Footer from './Footer';
import { PromiseProvider } from 'mongoose';
import { withOrientation } from 'react-navigation';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

var randomNumber = Math.floor(Math.random() * 1000000) + 1;


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;




const SignUp = ({navigation}) => {


const [name, setName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();


function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
}

useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;

}, []);

if (initializing) return null;

function createUserAccount() {
auth() 

  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    
    
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('User email: ', user.email);
    }

    firestore().collection("users").doc(user.uid).set({
      email: email,
      name: name,
      password: password,
      ID: randomNumber,
  })

    
  });

navigation.navigate('Home');
 

  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
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
        onChangeText={newText => setName(newText)}
        defaultValue={name}
    />
    <TextInput
        style={styles.inputText}
        placeholder="Username/Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
    />
     <TextInput
        style={styles.inputText}
        placeholder="Password"
        onChangeText={newText2 => setPassword(newText2)}
        defaultValue={password}
    />
    <TouchableOpacity onPress={createUserAccount} style={styles.button}>
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