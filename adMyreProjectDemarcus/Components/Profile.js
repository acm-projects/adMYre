import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, Button, ScrollView} from 'react-native';
import HomePage from './Homepage';
import Footer from './Footer';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Profile = () => {
  return (
    <View>
      <ImageBackground 
      source={require("../Images/StartPage.jpg")}  >
       
  <View style={{height: '100%'}} >   
     <View>
      <Text style={styles.heading}> My Achievements </Text>
     </View>
     <View>
      <Button
        title="Add Achievement"
      />

     </View>
     <ScrollView style={styles.scrollView}>
        <Text> all the achievements are added here </Text>
     </ScrollView>
  </View>



      </ImageBackground>
    </View>
  );
};

  


const styles = StyleSheet.create({
img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'top',
    alignItems: 'top',
},
heading: {
          flex: 1,
          fontSize: 50,
          color: "#FFFFFF",
          fontFamily: 'JacquesFrancois-Regular',
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
        },

  
   

     scrollView: {
      backgroundColor:'white',
      marginHorizontal: 20,
     },

});

export default Profile;