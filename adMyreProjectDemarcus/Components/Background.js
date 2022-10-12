import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, Button, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T} from 'react-native';
import HomePage from './Homepage';
import Footer from './Footer';
import { PromiseProvider } from 'mongoose';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Background = (navigation) => {
    return (
        <ImageBackground 
        source={require("../Images/StartPage.jpg")} 
        style={styles.img}
        >
         <Button
        title="Go to Details"
      />
 <HomePage/>
 <Footer/>
 
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
}
});


export default Background;