import React, { useEffect, useReducer, useState } from 'react';
import WebFont from 'webfontloader'; 
import {ImageBackground, RefreshControl, View, Text, StyleSheet, ShadowPropTypesIOS, Dimensions, T, Button, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import Footer from './Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import db from '@react-native-firebase/firestore';
import collection from '@react-native-firebase/firestore';
import snapSho from '@react-native-firebase/firestore';
import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import Panel from './Panel';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
var randomNumber = Math.floor(Math.random() * 1000000) + 1;
var randomNumber2 = Math.floor(Math.random() * 1000000) + 1;
var randomNumber3 = Math.floor(Math.random() * 1000000) + 1;
var pickIcon = Math.floor(Math.random() * 4) + 1 



var newIcon = [
      "heart",
      "happy-sharp",
      "trophy",
     "ios-heart",
     "md-nutrition",
]

var Icon = newIcon[pickIcon];



console.log(newIcon[1]);

const Profile = ({navigation}) => {

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log("wooooo");
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);



  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

  const [user, setUser] = useState();
  const [achieve, setAchieve] = useState();
  const users = auth().currentUser;
  const userID = users.uid;
  const userName = users.displayName;
  const [name, setName] = useState(name);



 const [peoples, setPeople] =useState ([
  {achievement: 'Finished Homework Early!', icon: newIcon[1],  id: userName,  key: "2"},

 ]);


  //const [name, setName] = useState(“Demarcus B”);
  //const [achievement, setAchievement] = useState(“”);


  firestore().collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      if (users.email == doc.data().email) {
        setName(doc.data().name);
      }
    })  


  })

 






  firestore().collection("users").doc(userID).collection("achievements").get()
  .then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
   
    var document = doc.data().title;
    console.log(doc.data().title);
   
   if (global.checkReload == 1) {
    peoples.push({
      title: doc.data().title,
      achievement: doc.data().achievement,
      id: doc.data().title,
      key: randomNumber3,
    },

    );
    global.checkReload = 0;
   }
    
   
  });
})
   

  
  return (  

    
    <View style = {{backgroundColor: "black",
    height: screenHeight,
    width: screenWidth,
  flex:1,
    }}
    
    >
  <Text style = {styles.text}> {userName}

     
      </Text>
      <Text style = {styles.informativeText}>All of your accomplishments are listed here.</Text>
   
     
      <View 
      style={styles.img}
      >
      <Text  onPress={() => navigation.navigate('addAchievement')} style = {styles.affirmation}> Click here to add an achievement! </Text>
   
   <Text style={styles.dailyaffirmation}>
   Look at all you have accomplished!
   
   </Text>

   <ScrollView
           refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
   >
      <Panel  title="Add achievements!" icon="heart">
          <Text> Went Walking!</Text>
  </Panel>
   {peoples
   .map((peoples)=> {
    return (

    <Panel key={peoples.key} title={peoples.id} icon={Icon}>
          <Text key={200}>{peoples.achievement}</Text>
  </Panel>
    )
   })}






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
      backgroundColor: "#FFFFFF",
      textAlign: 'center',
      width: 300,
      height: 50,
      marginTop: 20,
      marginLeft: 20,
    },

    borderStyle: {
      borderWidth: 100,
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
      marginLeft: 10,
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