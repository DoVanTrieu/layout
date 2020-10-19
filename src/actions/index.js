export const addTeam = newTeam => ({
    type: 'ADD_TEAM',
    payload: newTeam
})

export const setFilterList = valueSearch => ({
    type: 'SET_FILTER_LIST',
    payload: valueSearch
})