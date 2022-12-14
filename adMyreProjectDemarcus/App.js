import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Dimensions,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Background from './Components/Background'
import Login from './Components/LoginPage'
import Sign from './Components/SignUp'
import HomePage from './Components/Homepage'
import StartPage from './Components/StartPage'
import LoggedInPage from './Components/LoggedInPage'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Calendar from './Components/Calender';
import Profile from './Components/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screen names
const homeName = 'HomePage';
const calenderName = 'Calender';
const profileName = 'Profile';


const Tab = createBottomTabNavigator();

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

//Render the navbar as just the background
function LogoTitle() {
  return (
    <Image
      style={ {width: 650, height: 65} }
      source={require("./Images/StartPage.jpg")}
    />
  );
}

function Home({navigation})
{
  return (
      <Tab.Navigator 
        initialRouteName ={homeName}
        options={{
             headerTitle: (props) => <LogoTitle {...props} />,
             headerShadowVisible: false,
              }}
        >

        <Tab.Screen name ={homeName} 
        component ={HomePage} 
        options={{tabBarLabel:'Home', headerShown: false,  headerTitle: (props) => <LogoTitle {...props} />, headerShadowVisible: false,  tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />)}}/>
            <Tab.Screen name ={calenderName}
             component ={Calendar}
             options={{tabBarLabel:'Calendar', headerShown: false, headerTitle: (props) => <LogoTitle {...props} />,  headerShadowVisible: false,  tabBarIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />)}}/>
                <Tab.Screen name ={profileName} component ={Profile} options={{tabBarLabel:'Profile', headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="happy" color={color} size={size}/>)}}/>

        </Tab.Navigator>
  );
}

const LoginSignUp = ({navigation}) => {
  return (
    <ImageBackground
    source={require("./Images/StartPage.jpg")} 
        style={styles.img}>
         <StartPage/>
         <View >
         <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button} >
         <Text style={styles.buttonText}>
        log in
         </Text>
         </TouchableOpacity>
         <View
/>
         <TouchableOpacity onPress={() => navigation.navigate('Sign')} style={styles.button2}>
         <Text style={styles.buttonText}>
        sign up
         </Text>
         </TouchableOpacity>
         </View>    
</ImageBackground>
          
  );
  }

  const styles = StyleSheet.create({
    button: {
    
        backgroundColor: "white",
        width: 365,
        alignItems: 'center',
        height: 80,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 35,
        borderWidth: 1,
       
        
    },

    button2: {
        backgroundColor: "#FD8686",
        width: 365,
        alignItems: 'center',
        height: 80,
        marginTop: 20,
        marginBottom: 40,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 35,
        borderWidth: 1,
    },

    img: {
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
  },


    buttonText: {
        alignItems: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: "JacquesFrancois-Regular",

    },

    

});




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen
         name="loginSignUp"
          component={LoginSignUp} 
          options={{
             headerTitle: (props) => <LogoTitle {...props} />,
             headerShadowVisible: false, 

              }}
          />
        <Stack.Screen name="Login" component = {Login}/>
        <Stack.Screen name="Sign" component = {Sign}/>
        <Stack.Screen name="Home" component = {Home} options = {{
          headerShown: false,
        }}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}



export default App;
