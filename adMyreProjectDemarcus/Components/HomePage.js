import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const HomePage = (navigation) => {
  const [text,setText] = useState("\"You are amazing!\"");
    return (
      <ImageBackground
      source={require("../Images/StartPage.jpg")} 
      style={styles.img}
      >
     
        <View style={{flexDirection: 'row'}}>
        <Text style = {styles.text}> Ho
        <Text style = {styles.middleText}>me</Text>
        </Text>
        </View>

       
        <Text style = {styles.affirmation}> {text} </Text>
        <Text style={styles.dailyaffirmation}>
        Recently You...
        </Text>
        <ScrollView style={{flex: 1, padding: 10}}>
        <Text style = {styles.recentaffirmation}> Woke up early!! </Text>
        <Text style = {styles.recentaffirmation}> GOT A 50 IN CS</Text>
        <Text style = {styles.recentaffirmation}> ATE BREAKFAST</Text>
        <Text style = {styles.recentaffirmation}> Touched Grass!</Text>
        <Text style = {styles.recentaffirmation}> ATE FOOOOOOD!</Text>
        <Text style = {styles.recentaffirmation}> HUNG OUT WITH A FRIEND!</Text>
        <Text style = {styles.recentaffirmation}> Hung out with your familiy</Text>
        <Text style = {styles.recentaffirmation}> You did your homework!</Text>
        
</ScrollView>

        </ImageBackground>
     
    )
    }

    const styles = StyleSheet.create({ 

      affirmation: {
        fontSize: 30,
        color: "#636060",
        fontFamily: 'karla-v23-latin-regular',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        padding: 25,
        backgroundColor: "white",
        textAlign: 'center',
      },

      addAffirmation: {
        textAlign: 'center',
        fontSize: 50,
        color: "black",
        fontFamily: 'karla-v23-latin-regular',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 1000,
        marginTop: 10,
        marginRight: 30,
        marginBottom: 10,
       marginLeft: 20,
       paddingRight: 15,  
       backgroundColor: 'white',
       
      
      },

      recentaffirmation: {
        fontSize: 30,
        color: "#636060",
        fontFamily: 'karla-v23-latin-regular',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100,
        padding: 25,
        backgroundColor: "white",
        marginTop: 20, 
        textAlign: 'center',
      },

      dailyaffirmation: {
        fontFamily: 'JacquesFrancois-Regular',
        color: "black",
        textAlign: 'left',
        marginTop: 20,
        fontSize: 30,
      },

        text: {
          fontSize: 70,
          color: "white",
          fontFamily: 'JacquesFrancois-Regular',
          textAlign: 'center',
          marginLeft: 70,

        },

        scrollView: {
          backgroundColor: 'pink',
          marginHorizontal: 20,
        },

        middleText: {
          fontSize: 70,
          color: "#FD8686",
          fontFamily: 'JacquesFrancois-Regular',
          textAlign: 'center',


        },
        
      

        img: {
          height: screenHeight,
          width: screenWidth,
          flex: 1,
         padding: 5,
      },


      
      });
     
export default HomePage;
