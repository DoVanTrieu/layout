
export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";
export const fetchData = {
    startFetch() {
        return { type: API_CALL_REQUEST };
      },
      successFetch(payload) {
        return { type: API_CALL_SUCCESS, payload };
      },
      failFetch(payload) {
        return { type: API_CALL_FAILURE, payload };
      },
}
export const addTeam = newTeam => ({
    type: 'ADD_TEAM',
    payload: newTeam
})
export const setFilterList = valueSearch => ({
    type: 'SET_FILTER_LIST',
    payload: valueSearch
})
export const setData = data => ({
    type: 'SET_DATA',
    payload: data
})