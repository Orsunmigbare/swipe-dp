import React, { Component } from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import {View, Text, StyleSheet, Dimensions, ImageBackground, Animated, TouchableNativeFeedback} from 'react-native';
import {Feather, Ionicons} from "@expo/vector-icons"
const {width} = Dimensions.get('window')


class CallPage extends Component {
    state = {
        translateY : new Animated.Value(150)
    }
    componentDidMount(){
        Animated.spring(this.state.translateY, {delay: 200, bounciness: 2,  toValue: 0}).start()
    }
    render() {
        let {translateY} = this.state;
        let {setScreen} = this.props;
        return (
        <ImageBackground hei source={require('../assets/user_profiles/navas.jpg')} style={[{flex :1, width: width}]}>
                <LinearGradient colors={['rgba(225,225,225, .4)', '#4214c2']} style={[{flex: 1},styles.flex_column_between]} locations={[0.25, 1]}>
                <View style={{marginTop: 50}}>
                <Text style={{fontSize: 15, letterSpacing: 2, textAlign: 'center'}}> VOICE CALL </Text>
                <Text style={{fontSize: 30, letterSpacing: 2, textAlign: 'center'}}> Marc Stergen  </Text>
                <Text style={{fontSize: 17, textAlign: 'center'}}> Calling </Text>
                </View>
                <View>
                <TouchableNativeFeedback onPress={()=>{setScreen('chat')}}>
                <Ionicons name='ios-call' color={'rgb(255,50,100)'} size={40} style={[{alignSelf: 'center', marginBottom: 60, backgroundColor: 'white', padding: 15, paddingHorizontal: 20, borderRadius: 45, elevation: 10}, styles.call_icon]}/>
                </TouchableNativeFeedback>
                <Animated.View style={[styles.flex_row_aruond, {width: '100%', marginBottom: 60, justifyContent:"space-evenly", transform: [{translateY: translateY}]}]}>
                <Feather name='volume-2' size={25}  color={'white'}  />
                <Feather name='bluetooth' size={25}  color={'white'} style={{backgroundColor: 'rgba(225, 225, 225, .1)', padding: 12, borderRadius: 30, }}/>
                <Feather name='video' size={25}  color={'white'}/>
                <Feather name='mic-off' size={25}  color={'white'} />
                </Animated.View>
                </View>
                </LinearGradient>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    flex_row_aruond: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
    }, 
    flex_column_between: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    call_icon : {

    },
    border_class: {
        borderWidth: 1,
        borderColor: 'black'
   }, 
})
export default CallPage;