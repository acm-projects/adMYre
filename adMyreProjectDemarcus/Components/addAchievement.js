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
} from 'react-native';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AddAchievement = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  return (
    <View>
      <ImageBackground
        source={require('../Images/StartPage.jpg')}
        style={styles.img}>
        <Text style={styles.heading}>Add 
        <Text> </Text>
        <Text style={styles.heading2}>
           Achievement
         </Text> 
         </Text>
        <Text style={styles.subContent}> Title of your achievement </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: screenWidth }}
          placeholder=""
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />

        <Text style={styles.subContent}> What was your achievement? </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: screenWidth }}
          placeholder=""
          onChangeText={(newText) => setText2(newText)}
          defaultValue={text2}
        />

        <Text style={styles.subContent}> When was your achievement? </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: screenWidth, marginBottom: 50 }}
          placeholder=""
          onChangeText={(newText) => setText3(newText)}
          defaultValue={text3}
        />



<TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Add Items</Text>
</TouchableOpacity>
       
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    marginLeft: 70,
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: "#FD8686",
    width: 250,
    borderRadius: 35,
    borderWidth: 1,
  },

  buttonText: {
    textAlign: 'center',
    alignContent: 'center',
    height: 50,
    color: 'white',
    fontSize: 30,
    fontFamily: "JacquesFrancois-Regular",

},

  img: {
    height: screenHeight,
    width: screenWidth,
    textAlign: 'center',
  },

  heading: {
    fontSize: 30,
    fontFamily: 'JacquesFrancois-Regular',
    marginTop: 30,
    color: 'white',
  },

  
  heading2: {
    fontSize: 30,
    fontFamily: 'JacquesFrancois-Regular',
    marginTop: 50,
    color: '#FD8686',
  },

  subContent: {
    marginTop: 50,
    fontFamily: 'JacquesFrancois-Regular',
    fontSize: 20,
  },
});

export default AddAchievement;
