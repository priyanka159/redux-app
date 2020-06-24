import React, { Component } from 'react';
import { View, Text, SafeAreaView ,TouchableOpacity} from 'react-native';
//import {connect} from 'react-redux'
import { increment,decrement,reset } from './src/actions/count';
import { FlatList } from 'react-native-gesture-handler';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import AppNavigator from './src/navigation/rootNavigation'
import {connect} from 'react-redux'
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem=(item,index)=>{
  <Text>{item}</Text>
  }
  render() {
    console.log(this.props,'hello store')
    return (

      <SafeAreaView>
       <View style={{flex:1}}>
     
       <Text style={{marginLeft:100,marginTop:50,fontSize:50}}>{this.props.count}</Text>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity
         onPress={()=>{
          console.log('here button pressed')
          this.props.dispatch(increment())
         }
        }
         style={{height:40,width:100,borderWidth:2,marginLeft:20,marginTop:60,backgroundColor:'yellow'}}>
          <Text style={{textAlign:'center'}}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
          console.log('here button pressed')
          this.props.dispatch(decrement())
         }
        }
         style={{height:40,width:100,borderWidth:2,marginLeft:20,marginTop:60,backgroundColor:'yellow'}}>
          <Text style={{textAlign:'center'}}>Decrease</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>{
          console.log('here button pressed')
          this.props.dispatch(reset())
         }
        }
         style={{height:40,width:100,borderWidth:2,marginLeft:20,marginTop:60,backgroundColor:'yellow'}}>
          <Text style={{textAlign:'center'}}>reset</Text>
        </TouchableOpacity>
        </View>
        <FlatList
        data={this.props.user}
        renderItem={this.renderItems}
        />
        <Text style={{marginTop:150}}>{this.props.user.map(users=>{
          return<Text>{users.name}</Text>
        })}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    count:state.count,
   user:state.user
  }
}
export default connect(mapStateToProps)(App)
//export default connect(mapStateToProps)(App)

// import React from 'react';
// import { Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!Love You</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });

// export default createAppContainer(TabNavigator);
