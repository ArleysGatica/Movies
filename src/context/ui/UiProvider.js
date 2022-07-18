import React ,{useReducer} from 'react'
import { UiContext } from './UiContext'
import { uiReducer } from './UiReducer'

const INITIAL_UI_STATE = {
    isOpenFilter :false
}

export const UiProvider = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_UI_STATE)

  const toggleFilter = () => {
    dispatch({
      type: 'TOGGLE_FILTER',
      payload:{
        isOpenFilter: !state.isOpenFilter
      }
    })
    }
    
  return (
    <UiContext.Provider value={{
        ...state,
        toggleFilter
    }}>
        {children}
    </UiContext.Provider>
  )
}
