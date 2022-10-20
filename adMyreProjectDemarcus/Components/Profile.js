import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader'; 
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, Button, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import HomePage from './Homepage';
import Footer from './Footer';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Profile = () => {
  const [name, setName] = useState("Demarcus B");
  const [achievement, setAchievement] = useState("");
  return (

      <ImageBackground 
      source={require("../Images/StartPage.jpg")} 
      style={styles.img} >
       
       
 
  <View>
    <Text style={styles.name}> Demarcus
    <Text style={{color: '#FD8686'}}> Braclet </Text>

        <Text style = {styles.addToAchievement}> + </Text>
    
     </Text>
     </View>  
    
     <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  }}
/>

    <Text style={styles.text}> Look at all you have accomplished!</Text> 
    <View style={styles.rectangle}>
  <ScrollView style={{flex: 1, padding: 5}}>
  <Text style={styles.addAchievementHeader}> December 12, 2022 </Text>
  <Text style={styles.addAchievement}>* Ate lunch </Text>
  <Text style={styles.addAchievement}>* UHHHHHHHHHHHHHHHHHHHHH </Text>

  
  <Text style={styles.addAchievementHeader}> December 13, 2022 </Text>
  <Text style={styles.addAchievement}>* WOOKE UP </Text>
  <Text style={styles.addAchievement}>* PARTAYYYY </Text>

  <Text style={styles.addAchievementHeader}> December 14, 2022 </Text>
  <Text style={styles.addAchievement}>* NO PARTY unhappy days </Text>
  <Text style={styles.addAchievement}>*WORKOUT WITH THE BOYS IN BLYE </Text>
  
  <Text style={styles.addAchievementHeader}> December 15, 2022 </Text>
  <Text style={styles.addAchievement}>* NO PARTY unhappy days </Text>
  <Text style={styles.addAchievement}>* PARTAYYYY </Text>
  

  </ScrollView>
  </View>


      </ImageBackground>
  
  );
};

  


const styles = StyleSheet.create({
  addAchievement: {
    fontSize: 30,
    color: "white",
    fontFamily: 'JacquesFrancois-Regular',
   
  },


  addAchievementHeader: {
    fontSize: 30,
    color: '#FD8686',
    fontFamily: 'JacquesFrancois-Regular',
   
  },

  addToAchievement: {
    marginLeft: 20,
      fontSize: 30,
      color: "black",
      fontFamily: 'karla-v23-latin-regular',
      marginLeft: 20,
      borderRadius: 20,
      padding: 10,
      height: 500,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      flex: 1,
    
    
  },

img: {
    height: screenHeight,
    width: screenWidth,
      flex: 1,
      padding: 5,
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
 name: {
          fontSize: 30,
          color: "white",
          fontFamily: 'JacquesFrancois-Regular',
          textAlign: 'center',

        },

nameHeader: {
  flexDirection: 'row',
  height: '100%'
},

     scrollView: {
      backgroundColor:'white',
      marginHorizontal: 20,
     },

     rectangle: {
      marginLeft: 20,
      borderRadius: 20,
      padding: 10,
      height: 500,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      flex: 1,

    },

    text: {
      fontSize: 30,
      color: "white",
      fontFamily: 'JacquesFrancois-Regular',
      textAlign: 'center',

    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

});

export default Profile;