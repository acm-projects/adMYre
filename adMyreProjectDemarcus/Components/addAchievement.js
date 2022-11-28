import React, { useState } from 'react';
import WebFont from 'webfontloader';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ShadowPropTypesIOS,
  Dimensions,
  T,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const AddAchievement = () => {
  var randomNumber = Math.floor(Math.random() * 1000000) + 1;
  const [title,setTitle] = useState('');
  const [achievement,setAchievement] = useState('');
  const [time,setTime] = useState('');
  const [user, setUser] = useState();
  const [achieve, setAchieve] = useState();
  const users = auth().currentUser;
  const userID = users.uid;
  const userName = users.displayName;
  const [name, setName] = useState(name);



  function addAchievements() {
    global.recentAchievement = achievement;
    useAlert();
    const user = firebase.auth().currentUser;
    const userID = user.uid;

   
    

       firestore().collection('users').doc(userID).collection('achievements').add({
         title:title,
         achievement:achievement,
         time:time,
         key:randomNumber,
     
        })

        global.checkReload = 1;
  }



  const shareData = async() => {
    try {
        await Share.share({
            message:
                'This is the demo text',
        });
    } catch (error) {
        alert(error.message);
    }
};





const useAlert = () => {
Alert.alert(
  "Achievement Added!",
  "Would you like to share it?",
  [
    {
      text: "No",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Yes",
     onPress: () => shareData(), 
  },
  ]
  
);
}
  
console.log(global.mood);
  return (
    <View>
      <ImageBackground
        source={require('../Images/StartPage.jpg')}
        style={styles.img}>
        <Text style={styles.heading}> Add </Text>
        <Text style={styles.heading2}> Achievement </Text>
        <Text style={styles.subContent}> Title of your achievement </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20,  marginLeft: 15 }}
          placeholder=""
          onChangeText={(newText) => setTitle(newText)}
          defaultValue={title}
        />
        <Text style={styles.subContent}> What was your achievement? </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20, marginLeft: 15  }}
          placeholder=""
          onChangeText={(newText) => setAchievement(newText)}
          defaultValue={achievement}
        />
        <Text style={styles.subContent}> When was your achievement? </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20, marginLeft: 15  }}
          placeholder=""
          onChangeText={(newText) => setTime(newText)}
          defaultValue={time}
        />
        <TouchableOpacity
          onPress={addAchievements}
          color="#FD8686"
          style={styles.button1}
        >
        <Text> Add achievement to profile </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    jutifyContent: "top",
    
  },
  heading: {
    fontSize: 50,
    fontFamily: 'JacquesFrancois-Regular',
    alignContent: 'center',
    color: 'white',
    alignSelf: 'center',
  },
  heading2: {
    fontSize: 50,
    fontFamily: 'JacquesFrancois-Regular',
    alignContent: 'center',
    color: '#FD8282',
    alignSelf: 'center',
  },
  subContent: {
    marginLeft: 10,
    marginTop: 20,
    fontFamily: 'JacquesFrancois-Regular',
    fontSize: 20,
  },
  button1: {
    width: 200,
    marginTop: 40,
    borderWidth: 2,
    backgroundColor: '#FD8686',
    alignSelf:'center',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  }
});
export default AddAchievement;




















