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
        <Text style={styles.heading}> Add Achievement </Text>
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
          style={{ height: 90, backgroundColor: 'white', width: '90%', borderRadius: 20, margin: 10, }}
          placeholder=""
          onChangeText={(newText) => setText3(newText)}
          defaultValue={text3}
        />

        <Button
          onPress={this._onpressButton}
          title="Add Achievement to profile"
          color="#FD8686"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'top',
    alignItems: 'top',
  },

  heading: {
    fontSize: 30,
    fontFamily: 'JacquesFrancois-Regular',
    marginTop: 50,
    alignContent: 'left',
    color: 'white',
  },

  subContent: {
    alignContent: 'left',
    marginTop: 70,
    fontFamily: 'JacquesFrancois-Regular',
    fontSize: 20,
  },
});

export default AddAchievement;
