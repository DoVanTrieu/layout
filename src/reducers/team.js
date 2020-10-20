import mockData from "../components/data/TeamJson";


const initState = {
  data: mockData,
  dataFilter:mockData
}
const teams = (state = initState, action) => {
  
  switch (action.type) {
    // case 'SET_FILTER_LIST': {
    //   // console.log(' SET_FILTER_LIST state', state)
    //  const { data } = state;
    //  const  dataFilter = data.filter( team => {
    //   return (team.name.toLowerCase().indexOf(
    //     action.payload.toLowerCase()) !== -1)
    // })
    //   return {
    //     ...state,
    //     dataFilter: dataFilter
    //   }
    // }
    case 'ADD_TEAM':
      // const newDataFilter = action.payload;
      // const newData = [...state.data;
      return {
        data: action.payload
      }
    default:
      return state
  }
  
}
  export default teams;