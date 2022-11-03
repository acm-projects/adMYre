import React from 'react';
import {Render, Button, StyleSheet, Text, View,ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda,} from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginPage  from './LoginPage';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
var mood = '';

const MoodPicker = ({navigation}) =>{
  return(
    <ImageBackground
        source={require("../Images/StartPage.jpg")}
        style={styles.img}
        >
    <View style={{alignSelf:'center'}}>
    <Text style={styles.text}> What Was Your </Text>
    <Text style={styles.text2}> Mood </Text>
    <Text style={styles.text}> Today? </Text>
<View style={styles.images}>
 <TouchableOpacity onPress={() => navigation.navigate('Calender')} style={styles.button}>
  <Ionicons name="happy-outline" size={150}/>
 </TouchableOpacity>
</View>
<View style={styles.images}>
</View>
<TouchableOpacity onPress={() => navigation.navigate('Calender')} style={styles.button}>
  <Ionicons name="sad-outline" size={150}/>
 </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
img: {
    height: screenHeight,
    width: screenWidth,
    flex:1,
},
buttonText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
        fontFamily: "JacquesFrancois-Regular",
    },
button: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius:30 ,
        width: 175,
        alignItems: 'center',
        alignSelf: 'center',
    },
text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'JacquesFrancois-Regular',
    alignSelf: 'center',
  },
text2: {
    fontSize: 30,
    fontFamily: 'JacquesFrancois-Regular',
   color: "#FD8686",
    alignSelf: 'center',
  },
  images: {
    alignself: 'center',
    paddingTop: 100,
  },
});
export default MoodPicker;