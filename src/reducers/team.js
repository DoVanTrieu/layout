import mockData from "../components/data/TeamJson";


const initState = {
  data: mockData,
  dataFilter:mockData
}
const teams = (state = initState, action) => {
  
  switch (action.type) {
    case 'ADD_TEAM':
   
      return {
        data: action.payload
      }
    default:
      return state
  }
  
}
  export default teams;