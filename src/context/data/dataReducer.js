export const dataReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SET_SERIES':
            return {
                ...state,
                series: action.payload
            }
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload
            }

        default:
            return state
    }
}