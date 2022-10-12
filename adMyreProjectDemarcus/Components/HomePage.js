import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import {View, Text, StyleSheet, Image} from 'react-native';


const HomePage = () => {
    return (
        <View>
        <Text style = {styles.text}> ad
        <Text style = {styles.middleText}>MY</Text>
        <Text style = {styles.text}>re</Text>
        </Text>
        </View>
    )
    }

    const styles = StyleSheet.create({ 
        text: {
          fontSize: 70,
          color: "white",
          fontFamily: 'JacquesFrancois-Regular',
          paddingBottom: 120,
          marginTop: 40,
         
        },

        middleText: {
          fontSize: 70,
          color: "#FD8686",
          fontFamily: 'JacquesFrancois-Regular',
          paddingBottom: 120,


        },


      
      });
export default HomePage;
