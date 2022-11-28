import React, { useEffect, useReducer, useState } from 'react';
import {Render, Button, StyleSheet, Text, View,} from 'react-native';
import {Calendar, CalendarList, Agenda,} from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoodPicker from './MoodPicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment'
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




var Dates = moment(new Date()).format("YYYY-MM-DD")


const Diary = ({route}) => {

  console.log(global.mood);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  
  const [user, setUser] = useState();
  const [achieve, setAchieve] = useState();
  const users = auth().currentUser;
  const userID = users.uid;
  const userName = users.displayName;
  const [name, setName] = useState(name);
  const [moods, setMood] =useState ([
    {mood: "yellow"},
   ]);
  



  firestore().collection("users").doc(userID).collection("mood").get()
  .then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
   setMood = doc.data().mood

   moods.push({
    mood: doc.data().mood
  })
   
  });
})

.catch(function(error) {
  console.log(error);
})


  return(

      <View>
      <Calendar
  // Callback which gets executed when visible months change in scroll view. Default = undefined
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // Enable or disable scrolling of calendar list
  scrollEnabled={true}
  // Enable or disable vertical scroll indicator. Default = false
  showScrollIndicator={true}
  calendarParams
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  markingType={'period'}
  markedDates={{
    [Dates]: {color:global.mood, textColor:'black'},
    '2022-10-02': {color:'blue', textColor:'black'},
    '2022-10-03': {color:'blue', endingDay: 'true', textColor:'black'},
    '2022-10-04': {color:'yellow', textColor:'black'},
    '2022-10-26': {color: 'yellow', startingDay: 'true', textColor: 'black'},
    '2022-10-27': {color: 'yellow', textColor: 'black'},
    '2022-10-28': {color: 'yellow', endingDay: 'true', textColor:'black'},
    }}
   style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 1000,
  }}
  theme={{
    backgroundColor: '#FFFFFF',
    calendarBackground: '#79CD91',
    textSectionTitleColor: '#000000',
    textSectionTitleDisabledColor: '#D9E1E8',
    selectedDayBackgroundColor: '#00ADF5',
    selectedDayTextColor: '#FFFFFF',
    todayTextColor: '#00ADF5',
    dayTextColor: '#FFFFFF',
    textDisabledColor: '#D9E1E8',
    dotColor: '#00ADF5',
    selectedDotColor: '#FFFFFF',
    arrowColor: '#FFB8B8',
    disabledArrowColor: '#D9E1E8',
    monthTextColor: '#FFFFFF',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
/>
      </View>
  )
}
export default Diary
