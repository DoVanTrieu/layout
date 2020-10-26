const initState = {
  data: [],
}
const teams = (state = initState, action) => {
  
  switch (action.type) {
    case 'SET_DATA':
      { console.log('action.payload',action.payload)
        return {
        data: action.payload
      }}
    case 'ADD_TEAM':
      return {
        data: action.payload
      }
    default:
      return state
  }
  
}
  export default teams;