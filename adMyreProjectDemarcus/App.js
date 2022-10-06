
import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS} from 'react-native';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Background from './Components/Background';
import { PromiseProvider } from 'mongoose';

const App = () => {
  return (
  
    <View style ={styles.container}>
    <Text>
      <Background/>
     </Text>
    </View>

   
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  
  },

 

});


export default App;