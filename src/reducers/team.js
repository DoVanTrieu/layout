
const initState = {
  data: [],
  isLoading: true,
  error: null
}
const teams = (state = initState, action) => {

  switch (action.type) {
    case 'SET_DATA':
      {
        console.log('action.payload', action.payload)
        return {
          data: action.payload,
          isLoading: false
        }
      }
    // case 'ADD_TEAM':
    //   return {
    //     data: action.payload
    //   }
    default:
      return state
  }

}
export default teams;