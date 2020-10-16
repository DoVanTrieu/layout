
import mockData from "../components/data/TeamJson"
const displayData = (state = mockData, action) => {
  // console.log('action1', action, state)
  switch (action.type) {
    case 'ADD_TEAM':
      return [
        ...state,
        action.payload        
      ]
    default:
      return state
  }
}
  export default displayData