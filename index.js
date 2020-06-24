/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react'
import  {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import {name as appName} from './app.json';
import {increment,decrement,incrementBy} from './src/actions/count'
import {startGetUsers} from './src/actions/user'
const store=configureStore()
console.log(store.getState(),'index store')//stTE WITHIN redux store


// store.subscribe(()=>{
//     console.log(store.getState())
// })
//store.dispatch(startGetUsers())
 store.dispatch(increment())//action creator...which will return action object.....
// store.dispatch(increment())
// store.dispatch(decrement())
 store.dispatch(incrementBy(7))
const AppContainer=()=>{
    return(
<Provider store={store}>
    <App/>
</Provider>
    )
}
AppRegistry.registerComponent(appName, () =>AppContainer);
