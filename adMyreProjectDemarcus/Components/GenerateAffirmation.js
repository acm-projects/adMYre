import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import {Button, View, Text, StyleSheet, Image, ActivityIndicator,Alert} from 'react-native';
export default class App extends React.Component{
    constructor(props){
      super(props);
        this.state = {
            fromFetch: true,
            isLoading: true,
            dataSource : null,
        }
    }
    componentDidMount(){
        return fetch('https://zenquotes.io/api/random')
            .then((response => response.json()))
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
             })
            })
            .catch((error)=> {
            console.log(error)
            });
    }
    render(){
    if(this.state.isLoading){
        return(
            <View >
                <ActivityIndicator />
            </View>
        )
    }
    else{
         let affirmationsVal = this.state.dataSource.map((val,key) => {
               return <View key = {key} style = {styles.item}><Text style={{color: "black", fontSize: 20, fontFamily: 'JacquesFrancois-Regular',}}>{val.q}</Text></View>
         });
         return(
            <View style = {styles.container}>
                {affirmationsVal}
                <Button color="#FD8686" title="new affirmation" onPress={() => this.componentDidMount()}/>
                <View>
               
                </View>
            </View>
         );
    }
    }
}

const styles = StyleSheet.create({
        text: {
          fontSize: 70,
          color: "white",
          fontFamily: 'JacquesFrancois-Regular',
         
        },
        container:{
            paddingLeft: 10,
            paddingRight: 10,   
      marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: "white",
          fontFamily: 'JacquesFrancois-Regular',
         
        },
        item: {
            marginBottom: 20,
            paddingBottom: 10,
            alignSelf: 'stretch',
            color: "white",
          fontFamily: 'JacquesFrancois-Regular',
         
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#eee'
        },
        middleText: {
          fontSize: 70,
          color: "#FD8686",
          fontFamily: 'JacquesFrancois-Regular',
          
        },
});