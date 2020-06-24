const countReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':{
            return state+1
        }
        case 'DECREMENT':{
            return state-1
        }
        case 'INCREMENT_BY':{
            return state=state+action.payload
        }
        case 'RESET':{
            return state=0
        }
        default:{
            return state
        }
    }
}
export default countReducer


// const countReducer=(state=0,action)=>{
//     switch(action.type){
//         default:{
//             return state
//         }
//     }
// }
// export default countReducer