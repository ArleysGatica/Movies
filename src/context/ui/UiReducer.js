export const uiReducer = (state = {}, action) => {

    switch (action.type) {
        case 'TOGGLE_FILTER':
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state
    }
}