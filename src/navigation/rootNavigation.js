import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
//import { createBottomTabNavigator } from 'react-navigation-tabs'
import City from '../screens//City/City'
import Cities from '../screens/Cities/Cities'
import AddCity from '../screens/AddCity'
import HomeScreen from '../screens/Home/home'
const MainNavigator=createStackNavigator(
    {
        Cities:{
            screen:Cities,
            navigationOptions:{
                headerShown:false 
            }
        },
        City:{
            screen:City
        }
    },
       {initialRouteName:'Cities'}
    
)
export default AppNavigator=createAppContainer(MainNavigator)

// const Tab=createBottomTabNavigator({
//     Cities:{screen:Cities},
//     AddCity:{screen:AddCity}
// })

