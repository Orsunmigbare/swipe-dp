import React, { Component } from 'react';
import {Text,View, StyleSheet, Dimensions, Animated} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').widht;
import {LinearGradient} from 'expo-linear-gradient'
class TopBar extends Component {
    render() {
        let {global_anim_val} = this.props;
        const search_opa = global_anim_val.interpolate({
            inputRange: [0,1],
            outputRange: [1, 0]
        })
        return (
            <View style={[ styles.flex_row_aruond, {paddingHorizontal: 10, paddingVertical: 15, position: 'absolute',  zIndex: 1000, top: 29, width: 350}]}>
                <DrawerCancel global_anim_val={global_anim_val}/>
                <Animated.View style={[styles.flex_row_end, {position: "absolute", right: 10, opacity: global_anim_val}]}>
                <EvilIcons name="bell"  style={{display: 'flex', paddingLeft: 10}}size={32} color="#4214c2" /> 
                <EvilIcons name="archive"  style={{display: 'flex', paddingLeft: 10}}size={32} color="#4214c2" /> 
                <EvilIcons name="trash"  style={{display: 'flex', paddingLeft: 10}}size={32} color="#4214c2" /> 
                </Animated.View>
                <Animated.View style={[styles.flex_row_end, {position: "absolute", right: 10, opacity: search_opa}]}>
                <EvilIcons name="search"  style={{display: 'flex'}}size={30} color="#4214c2" /> 
                </Animated.View>
            </View> 
        );
    }
}


class DrawerCancel extends Component{

    render(){
        let {global_anim_val} = this.props;
            const firstLineWith = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: [12, 30],
                }
            )
            const secondLineWith = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: [30, 0],
                }
            )
            const thirdLineWith = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: [20, 30],
                }
            )
            const firstLinerotate = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: ['0deg', '45deg'],
                }
            )
            const secondLinerotate = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: ['0deg', '-45deg'],
                }
            )
            const firstLinetranslateY = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: [0, 10],
                }
            )
            const secondLinetranslateY = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: [0, -8],
                }
            )
            const firstLinetranslateX = global_anim_val.interpolate(
                {
                    inputRange: [0,1],
                    outputRange: [0, 3],
                }
            )
        return(
            <View style={{width : 40, height: 23, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-around' }}>
             <Animated.View style={{height: 3, width: firstLineWith, backgroundColor: "#4214c2", borderRadius: 4, transform: [{rotate :firstLinerotate}, {translateY: firstLinetranslateY}, {translateX: firstLinetranslateX}] }}></Animated.View>
             <Animated.View style={{height: 3, width: secondLineWith, backgroundColor: "#4214c2", borderRadius: 4}}></Animated.View>
             <Animated.View style={{height: 3, width: thirdLineWith, backgroundColor: "#4214c2", borderRadius: 4 ,transform: [{rotate : secondLinerotate}, {translateY: secondLinetranslateY}]} }></Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flex_row_aruond: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    flex_row_end: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',

    },
    border_class: {
        borderWidth: 1,
        borderColor: 'black'
        }, 
})
export default TopBar;