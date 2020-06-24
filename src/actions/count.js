export const increment=()=>{
    return {type:'INCREMENT'}//action object---store
}
export const decrement=()=>{
    return{type:'DECREMENT'}
}
export const incrementBy=(v)=>{
    return{type:'INCREMENT_BY',payload:v}
}
export const reset=()=>{
    return {type:'RESET'}
}