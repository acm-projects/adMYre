import React, { useEffect, useReducer, useState } from 'react';
import WebFont from 'webfontloader'; 
import {ImageBackground, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, Button, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import Footer from './Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const user = firebase.auth().currentUser;


console.log(user);

const Profile = ({navigation}) => {
  const [user, setUser] = useState();
  const [achieve, setAchieve] = useState();
  const users = auth().currentUser;
  const userID = users.uid;
  const usersCollection = firestore().collection("Users").doc();
  //const [name, setName] = useState(“Demarcus B”);
  //const [achievement, setAchievement] = useState(“”);

  function getUser() {
    try {
      const documentSnapshot = firestore().collection("users").doc(userID).get();
      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
      console.log("Cannot find user")
    }
  };
  function getAchievements() {
    firestore().collection("users").doc(userID).collection("achievements").get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var list = [];
        list.push(doc.data());
      });
    })
  }
  const [text,setText] = useState("\"You are amazing!\"");
  return (
    <View style = {{backgroundColor: "black",
    height: screenHeight,
    width: screenWidth,
  flex:1,
    }}
    >
    
      <View>
      <Text style = {styles.text}> Demarcuss
      <Text> </Text>
      <Text style = {styles.middleText}>Braclet</Text>
     
      </Text>
      

      <Text style = {styles.informativeText}>All of your accomplishments are listed here.</Text>
   
      </View>
      <View 
      style={styles.img}
      >
     
     <Text  onPress={() => navigation.navigate('addAchievement')} style = {styles.affirmation}> Click here to add an achievement! </Text>
   
      <Text style={styles.dailyaffirmation}>
      Look at all you have accomplished!
      
      </Text>
      <Text>
      </Text>
      <ScrollView style={{flex:1}}>
      
      <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> Worked out {'\n'} 
      
   <Text>       Got them GAINES </Text>

       </Text>
       
      <Text style = {styles.recentaffirmation}> <Ionicons  color="blue" name="sad-outline" size={30}/> CS EXAM  
      <Text> {'\n'} </Text>
      <Text style={{borderWidth: 100,}}>      Got A 50</Text>
      <Text> {'\n'} </Text>
      <Text style={{borderWidth: 100,}}>      12 December 2022 </Text>
       </Text>
      <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={30}/> ATE BREAKFAST 
      <Text> {'\n'} </Text>
      <Text style={{borderWidth: 100,}}>      WITH MILK</Text>
      </Text>
      <Text style = {styles.recentaffirmation}> <Ionicons color="green"  name="happy-outline" size={30}/> Touched Grass! </Text>
      <Text style = {styles.recentaffirmation}> <Ionicons color="green"  name="happy-outline" size={30}/> ATE FOOOOOOD! </Text>
      <Text style = {styles.recentaffirmation}><Ionicons color="green"  name="happy-outline" size={30}/>  HUNG OUT WITH A FRIEND! </Text>
      <Text style = {styles.recentaffirmation}> <Ionicons color="green"  name="happy-outline" size={30}/> Hung out with your familiy </Text>
      <Text style = {styles.recentaffirmation}> <Ionicons color="green"  name="happy-outline" size={30}/> Finished Homework! </Text>
      
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
      flex: 1,
      padding: 25,
      backgroundColor: "white",
      marginTop: 20, 
      width: 350,
      marginLeft: 15,
    },

    dailyaffirmation: {
      textAlign: 'left',
      fontFamily: 'JacquesFrancois-Regular',
      color: "black",
      marginTop: 30,
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
   
export default Profile;