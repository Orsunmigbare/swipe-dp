import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
class BottomNav extends Component {
    render() {
        return (
            <View style={[{flex: 1, position:'absolute', bottom: 0,}, style.bottom_nav, style.flex_row_aruond]} >
            <IconText name='message-circle' text = {'Chats'} active={true} first/>
            <IconText name='eye-off' text={'Status'} middle = {true}/>
            <IconText name='phone' text={'Calls'}/>
            </View>
        );
    }
}

class IconText extends Component{
    render(){
        let {name, text, active, middle, first}= this.props;
        return(
            <View style={[{flex: 1}, first && {backgroundColor:"#4214c2" }]}>
            <View style={[{flex: 1, }, style.flex_row_aruond, {justifyContent: 'center', flex: 1, paddingVertical: 17, backgroundColor: active ?  "white" : "#4214c2"}, middle && {borderTopLeftRadius: 30}, first && {borderBottomRightRadius: 10}]}>
             <Feather name={name} size={23} color={active ? "#4214c2" : "white"}/>
             <Text style={{color: active ? "#4214c2" : "white", paddingLeft: 10}}> {text}</Text>
            </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    flex_row_aruond: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    border_class: {
        borderWidth: 1,
        borderColor: 'black'
        }, 
    bottom_nav: {
        backgroundColor: "white",

    }
})
export default BottomNav;