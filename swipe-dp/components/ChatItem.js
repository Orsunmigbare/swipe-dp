import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableNativeFeedback, Animated, TouchableWithoutFeedback, PanResponder} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
const width = Dimensions.get('window').width;
const AnimGradient  = Animated.createAnimatedComponent(LinearGradient)
class ChatItem extends React.Component{
    state = {
        selected : false
    }
    render(){
        let {selected} = this.state;
        let {animate_global, global_anim_val, setScreen} = this.props;
        let {name, time, number_of_messages, message, index, read} = this.props;
        return(
            <TouchableNativeFeedback 
            onLongPress = {()=>{this.setState({selected: true}); animate_global(true)}}
            onPress = {()=>{selected ? this.setState({selected: false}): null; animate_global()} }
            background = {TouchableNativeFeedback.Ripple('#f9f6f8', false)}
            style={{ width: width}}>
            <View style={[{width: width}, {justifyContent: 'center', alignItems: 'center'}, selected && {backgroundColor: '#f9f6f8'} ]}>
            <View style={[Styles.flex_row_aruond,  { height: 105, padding: 0,  borderBottomWidth: 1, borderBottomColor: "#f3f2f6"}]}>
            <ProfileImage global_anim_val={global_anim_val} selected={selected} setScreen={setScreen} index={index}/>
            <View
            style={[Styles.chatText,{flexDirection : 'column', flex: 1, justifyContent: 'center', height: '100%'}]}
            >
           <Text style={Styles.user_name}> {name} </Text>
           <Text style={[Styles.messages, {color : selected ? '#1ec994' : null } , read && {color: 'gray', fontWeight: '400'}]} numberOfLines={1} ellipsizeMode={"tail"}> { selected ? 'swipe right to call  >>' : message} </Text>
            </View>
            <View style={[Styles.not_box, {flexDirection : 'column', justifyContent: 'center', alignItems: 'flex-end'}]}>
            <Text style={Styles.time}> {time}</Text> 
            <Text style={[Styles.not_icon, read && {backgroundColor: 'white'}]}> {read ? "" :   number_of_messages } </Text>
            </View>
            </View>
            </View>
            </TouchableNativeFeedback>
        )
    
}
}

class ProfileImage extends React.Component{
    state = {
        anim_val: new Animated.Value(0)
    }
    render(){
        let {anim_val} = this.state;
         let {selected, setScreen} = this.props;
         let {index} = this.props;
         if(selected){
             Animated.timing(anim_val, {toValue: 1, duration: 250}).start()
         }else if(anim_val._value === 1){
            Animated.timing(anim_val, {toValue: 0, duration: 100}).start()
         }
        return(
            <View>
            <View style={{borderRadius: 35, padding: 2,  borderWidth: 2, borderColor: '#dedaec', marginRight: 5, zIndex: 1}}>
            
           { 
            index == 1 ? 
           <Image
            source={require('../assets/user_profiles/baby.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            />
          : index == 2 ? 
          <Image
          source={require('../assets/user_profiles/christie.jpg')}
          style = {[Styles.profile_image, {width : 65, height: 65}]}
          /> : 
          index == 3 ? 
          <Image
            source={require('../assets/user_profiles/daniel.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            />:
          index == 4 ?
          <Image
            source={require('../assets/user_profiles/garber.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            /> : 
          index == 5 ? 
          <Image
            source={require('../assets/user_profiles/jean.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            />: 
        index == 6 ? 
        <Image
        source={require('../assets/user_profiles/leo.jpg')}
        style = {[Styles.profile_image, {width : 65, height: 65}]}
        />
        : index == 7 ? 
        <Image
            source={require('../assets/user_profiles/maguire.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            />:
         index == 8 ?
         <Image
            source={require('../assets/user_profiles/marc_stergen.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            /> :
        index == 9 ?
        <Image
            source={require('../assets/user_profiles/michael.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            />
        :
        index == 10 ?
        <Image
            source={require('../assets/user_profiles/navas.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
        />
        : 
        index == 11 ? 
        <Image
            source={require('../assets/user_profiles/sarah.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            /> : 
            <Image
            source={require('../assets/user_profiles/williams.jpg')}
            style = {[Styles.profile_image, {width : 65, height: 65}]}
            />

        }
            </View>
            <CallIcon selected={selected} anim_val={anim_val} setScreen={setScreen}/>
            </View>
            
        )
    }
    
}

class CallIcon extends React.Component {
       state = {
           translateXanim: new Animated.Value(0)
       }
       panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt,gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt,gestureState) => true,
        onPanResponderGrant: (evt, {gestureState}) =>{
           
        },
        onPanResponderMove: (evt, {dx,vx}) =>{
          dx >= 0  ? Animated.spring(this.state.translateXanim, {toValue: dx, bounciness: 10}).start() : null
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, {dx,vx}) =>{
         dx < 144.0  ? Animated.spring(this.state.translateXanim, {toValue: 0, bounciness: 20}).start() : Animated.spring(this.state.translateXanim, {toValue: 230.0, bounciness: 1}).start(()=>{ this.props.setScreen('call')});
         vx > 0.8 ? Animated.spring(this.state.translateXanim, {toValue: 230.0, bounciness: 1}).start(()=>{ this.props.setScreen('call')}): null;
        }, 
        onPanResponderTerminate: (evt, gestureState) => {
        }, 
        onShouldBlockNativeResponder: (evt, gestureState)=>{
          return true
        }
    })
    render(){
        let {selected, anim_val} = this.props;
        let {translateXanim} = this.state;
        const gradientWidth = translateXanim.interpolate({
            inputRange: [0,230],
            outputRange: [70, 300]
        })
        return(
            <>
            <AnimGradient colors={['transparent', '#1ec9948c']} start={[0,0]} end={[1,0]} locations={[.3,1]} style={[{zIndex : selected ? 1 : 0, position: 'absolute', height: 76, width: gradientWidth, borderRadius: 35, opacity: anim_val}]}>

            </AnimGradient>
            <Animated.View style={[{borderRadius: 35, padding: 2, backgroundColor: 'white',  borderWidth: 2, borderColor: '#66b998', marginRight: 5, position: 'absolute', zIndex: selected ? 2 : 0} , {opacity: anim_val, transform: [{translateX: translateXanim}]}]}  {...this.panResponder.panHandlers}>
            <View
            style = {[Styles.call_icon, {backgroundColor: "#1ec994"}]}
            >
            <Feather name={'phone'} size={30} color= "white"  />
            </View>
            </Animated.View>
            </>
        )
    }
}


const Styles = StyleSheet.create({
    flex_row_aruond: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: width * 0.95
    }, 
    profile_image: {
        width: 65,
        height: 65,
        borderRadius: 30,
    },
    call_icon: {
        width: 68,
        height: 68,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    border_class: {
    borderWidth: 1,
    borderColor: 'black'
    }, 
    user_name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 7,
        color: "#090809"
    }, 
    messages: {
        fontWeight: '500',
        color: "#b4b3b4"
    }, 
    not_icon :{
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 5.5,
        color: 'white',
        fontSize: 9,
        backgroundColor: "#4214c2",
        alignSelf: "flex-end",
        marginRight: 2
    },
    time: {
       color: '#9c9b9c',
       marginBottom: 7,
       fontSize: 11,
    }
})

export default ChatItem;