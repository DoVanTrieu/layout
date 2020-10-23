import mockData from "../components/data/TeamJson";

const initState = {
  data: mockData
}

const teams = (state = initState, action) => {
  switch (action.type) {
    case 'SET_FILTER_LIST': {
     const { data } = state; 
     const  dataFilter = data.filter( team => {
      return (team.name.toLowerCase().indexOf(
        action.payload.toLowerCase()) !== -1)
    })
      return {
        ...state,
        dataFilter: dataFilter
      }
    }
      
    default:
      return state
  }
}
  export default teams;