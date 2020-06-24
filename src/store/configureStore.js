import {createStore,combineReducers,applyMiddleware} from 'redux'
import countReducer from '../reducers/countReducers'
import userReducer from '../reducers/userReducer'
import thunk from 'redux-thunk'
const configureStore=()=>{
const store=createStore(combineReducers({
    count:countReducer,
    user:userReducer
}),applyMiddleware(thunk))
return store
}
export default configureStore


// console.log(require('redux'))

// import {createStore,combineReducers} from 'redux'

// const configureStore=()=>{

//     const store=createStore(combineReducers({
//         count:countReducer
//     }))
//     return store
// }
// export default configureStore