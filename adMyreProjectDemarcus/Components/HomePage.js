import React, { useEffect, useState, useReducer } from 'react';
import WebFont from 'webfontloader';
import {View, RefreshControl, Text, StyleSheet, Image, ImageBackground, Dimensions, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GenerateAchievement from './GenerateAffirmation';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Easing, Notifier, NotifierRoot, NotifierComponents } from 'react-native-notifier';
import collection from '@react-native-firebase/firestore';
import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

var randomNumber = Math.floor(Math.random() * 1000000) + 1;
var randomNumber2 = Math.floor(Math.random() * 1000000) + 1;



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;



const HomePage = (navigation) => {
  const [peoples, setPeople] =useState ([
    {achievement: 'Aced my math exam!', id: 'John', key: "1"},
   ]);
  
  

  //NOTIFICATIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS----------------------
  const notifierRef = React.useRef(0);
  setTimeout(() => {
  Notifier.showNotification({
    hideOnPress: true,
  title: 'adMYre',
  description: global.recentAchievement,
  duration: 0,
  showAnimationDuration: 800,
  showEasing: Easing.bounce,
  onHidden: () => console.log('Hidden'),
  onPress: () => console.log('Press'),
 
          })
    }, 50000);

    //86400000

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

 
  const onRefresh = React.useCallback(() => {
    console.log("wooooo");
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  const [user, setUser] = useState();
  const [achieve, setAchieve] = useState();
  const users = auth().currentUser;
  const userID = users.uid;
  const userName = users.displayName;
  const [name, setName] = useState(name);

 
  firestore().collection("users").doc(userID).collection("achievements").get()
  .then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
   
  
    global.recentAchievement = doc.data().achievement;
    console.log(doc.data().achievement);
   
if (global.checkReload == 0) {
    peoples.push({
      title: doc.data().title,
      achievement: doc.data().achievement,
      id: doc.data().title,
      key: randomNumber,
    },

    );

    global.checkReload = 10;
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
       <NotifierRoot ref={notifierRef} />
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
        <ScrollView
         style={{flex:1}}
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
         >
        {peoples.map((peoples)=> {
    return (

          <Text key={peoples.key} style= {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={20}/> {peoples.achievement}</Text>
    )
   })}
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={20}/> Woke up early!! 
         </Text>
        <Text style = {styles.recentaffirmation}> <Ionicons color="green" name="happy-outline" size={20}/>ATE BREAKFAST </Text>
        
        
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
