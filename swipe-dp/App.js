import React , {Component} from 'react';
import { StyleSheet, Text, View, Animated} from 'react-native';
import ChatList from './components/ChatList'; 
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import CallPage from './components/CallPage'
import BottomNav2 from './components/BottomNav2'


export default class App extends Component {
   state = {
     global_anim_val : new Animated.Value(0),
     screen: 'chat'
   }

   animate_global = async (arg)=>{
    if(arg){
      Animated.timing(this.state.global_anim_val, {toValue: 1, duration:250}).start();
    }else{
      Animated.timing(this.state.global_anim_val, {toValue: 0, duration:250}).start();
    }
  
   }
   setScreen = (screen)=>{
     this.setState({screen})
   }
  render(){
    let {global_anim_val,screen} = this.state;
    return (
      <View style={[styles.container, {paddingTop: screen === 'call' ? 0 : 85}]}>
       { screen === 'call' ? <CallPage setScreen={this.setScreen}/>: <>
          <TopBar global_anim_val = {global_anim_val}/>
          <ChatList animate_global = {this.animate_global} global_anim_val = {global_anim_val} setScreen={this.setScreen}/>
          <BottomNav/>
          </>}
      </View>
    );
  }
  
}

 
        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 85
    paddingTop: 0
  },
});
