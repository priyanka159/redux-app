import axios from 'axios'
export const setUsers=(user)=>{
    return {type:'SET_USERS',payload:user}
}



export const startGetUsers=()=>{
  return(dispatch)=>{
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response)=>{
          const users=response.data
         // console.log('start',users)
          dispatch(setUsers(users))
      })
  }
}