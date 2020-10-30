import * as actions from '../actions/index';
const initState = {
  data: [],
  isLoading: true,
  error: null
}
const addTeam = (state = initState, action) => {

  switch (action.type) {
    case actions.API_CALL_REQUEST:
      return { ...state, isLoading: true, error: null };
    case actions.API_CALL_SUCCESS:
        console.log('action.payload', action.payload)
      return { data: action.payload, isLoading: false };
    case actions.API_CALL_FAILURE:
      return { data: action.payload, isLoading: false, error: action.error };
    case 'ADD_TEAM':
      return {
        data: action.payload
      }
    default:
      return state
  }

}
export default addTeam;