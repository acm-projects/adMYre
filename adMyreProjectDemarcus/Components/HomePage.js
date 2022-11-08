import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GenerateAchievement from './GenerateAffirmation';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const HomePage = (navigation) => {
  
  const [text,setText] = useState("\"You are amazing!\"");
    return (
      <View style = {{backgroundColor: "black",
      height: screenHeight,
      width: screenWidth,
    flex:1,
      }}
      >
      
        <View>
        <Text style = {styles.text}> Ho
        <Text style = {styles.middleText}>me</Text>
        <Text style = {styles.text}> Pa
        <Text style = {styles.middleText}>ge</Text>
        
        </Text>
        </Text>
        

        <Text style = {styles.informativeText}>Your daily accomplishments are listed here.</Text>
     
        </View>
        
        <View 
        style={styles.img}
        >
       
       <GenerateAchievement/>
     
        <Text style={styles.dailyaffirmation}>
        Recently You
        <Ionicons name="list-circle" size={20}/>
        </Text>
        <Text>
        </Text>
        <ScrollView style={{flex:1}}>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> Woke up early!! 
         </Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> GOT A 50 IN CS  </Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/>ATE BREAKFAST </Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> Touched Grass!</Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/>ATE FOOOOOOD!</Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> HUNG OUT WITH A FRIEND! </Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> Hung out with your familiy </Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> LISTEND TO I LIKE YOU I DO </Text>
        
</ScrollView>
</View>
        </View>
     
    )
    }

    const styles = StyleSheet.create({ 
      affirmation: {
        paddingTop:13,
        fontSize: 15,
        color: "black",
        fontFamily: 'karla-v23-latin-regular',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        textAlign: "center",
        backgroundColor: "cyan",
        textAlign: 'center',
        width: 300,
        height: 50,
        marginTop: 20,
        marginLeft: 35,
      },

      informativeText: {
        color: "#808080",
        fontSize: 15,
        fontFamily: 'JacquesFrancois-Regular',
        paddingLeft: 14,
      },

      recentaffirmation: {
        elevation: 15,
        shadowColor: '#52006A',
        fontSize: 25,
        color: "black",
        fontFamily: 'karla-v23-latin-regular',
        borderWidth: 3,
        
        padding: 25,
        backgroundColor: "white",
        marginTop: 20, 
       
        width: 350,
        marginLeft: 15,
      },

      dailyaffirmation: {
        marginTop: 30,
        textAlign: 'left',
        fontFamily: 'JacquesFrancois-Regular',
        color: "black",
      
        fontSize: 20,
      },

        text: {
          fontSize: 40,
          color: "white",
          fontFamily: 'JacquesFrancois-Regular',
        
         

        },


        middleText: {
          fontSize: 40,
          color: "#FD8686",
          fontFamily: 'JacquesFrancois-Regular',
         


        },

        topContainer: {
          textAlign: "left",
          color: "black",
        },
        
      

        img: {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: screenHeight,
          width: 380,
          marginTop: 10,
          backgroundColor: "#79CD91",
          marginLeft: 8,
          flex: 1,
    
      
        

         
      },


      
      });
     
export default HomePage;
