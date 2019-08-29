import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ChatItem from '../components/ChatItem'
import {users} from '../data/MockDb'
import { LinearGradient } from 'expo-linear-gradient';

class ChatList extends Component {
    render() {
        let {animate_global, global_anim_val, setScreen} = this.props;
        return (
            <>
           <ScrollView contentContainerStyle={[Styles.flex_colum_aruond,{paddingBottom: 100}]}>
               {users.map((user,i)=>(
               <ChatItem 
               animate_global = {animate_global} 
               global_anim_val={global_anim_val} 
               setScreen={setScreen}
               name = {user.name}
               message = {user.message}
               read = {user.read}
               time = {user.time}
               number_of_messages = {user.number_of_messages}
               key = {i}
               index = {i}
               />
               ))}
           </ScrollView>
          </>
        );
    }
}

const Styles = StyleSheet.create({
    flex_row_aruond: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    flex_colum_aruond: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    border_class: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default ChatList;