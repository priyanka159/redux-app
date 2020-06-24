import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';
import {createAppContainer} from'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
 class HomeScreen extends Component{
render(){
  console.log("home",this.props)
    return (
      <View style={styles.container}>
        <Text>Home  Screen </Text>
        <Text>{this.props.navigation.getParam('greet')}</Text>
        <Button 
        title="go to about" 
        onPress={()=>{this.props.navigation.navigate('About',{greet:" I love you"})}}
        />
      </View>
    );
  
}
}
class AboutScreen extends Component{

  render(){
    console.log("About",this.props)
      return (
        <View style={styles.container}>
          <Text>About Screen </Text>
          <Text>{this.props.navigation.getParam('greet')}</Text>
          <Button 
        title="go to Home" 
        onPress={()=>{this.props.navigation.navigate('Home',{'greet':"I love you toooo"})}}
        />
        </View>
      );
    
  }
  }
const MainNavigator=createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      title:'Home',
      headerStyle:{
        backgroundColor:'red'
      },
      headerTintColor:"white",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }
  },
  About:{
    screen:AboutScreen,
    navigationOptions:{
      title:'About',
      headerStyle:{
        backgroundColor:'red'
      },
      headerTintColor:"white",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }
  }
})
const AppNavigator= createAppContainer(MainNavigator)

class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default App
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignItems:"center"
  }
})
