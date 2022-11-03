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

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const AddAchievement = () => {
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
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  return (
    <View>
      <ImageBackground
        source={require('../Images/StartPage.jpg')}
        style={styles.img}>
        <Text style={styles.heading}> Add </Text>
        <Text style={styles.heading2}> Achievement </Text>
        <Text style={styles.subContent}> Title of your achievement </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20, margin: 5, }}
          placeholder=""
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Text style={styles.subContent}> What was your achievement? </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20, margin: 5, }}
          placeholder=""
          onChangeText={(newText) => setText2(newText)}
          defaultValue={text2}
        />
        <Text style={styles.subContent}> When was your achievement? </Text>
        <TextInput
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20, margin: 5, }}
          placeholder=""
          onChangeText={(newText) => setText3(newText)}
          defaultValue={text3}
        />
        <TouchableOpacity
          onPress={() => useAlert()}
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
    color: '#FD8686',
    alignSelf: 'center',
  },
  subContent: {
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




















