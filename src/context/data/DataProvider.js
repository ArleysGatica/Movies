import React, { useCallback, useReducer } from 'react'
import api from '../../data'
import { DataContext } from './DataContext'
import { dataReducer } from './dataReducer'

const INITIAL_DATA_STATE = {
  series: [],
  movies: []
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_DATA_STATE)

  const onFilterDataByNameAndCategory = useCallback(async(name, date,typeData='series') => {

    const data = await api.list()
    const filteredSeries = data[0].entries.filter(serie => serie.programType === typeData && serie.title.toLowerCase().includes(name.toLowerCase()) && serie.releaseYear  === date )
    const typeForDispatch = typeData === 'series' ? 'SET_SERIES' : 'SET_MOVIES'

    dispatch({
      type: typeForDispatch,
      payload: [...filteredSeries]

    })

  },[])

  const onLoadData = useCallback(async (typeData) => {

    const data = await api.list()

    const filteredSeries = data[0].entries.filter(serie => serie.programType === typeData)

    const typeForDispatch = typeData === 'series' ? 'SET_SERIES' : 'SET_MOVIES'

    dispatch({
      type: typeForDispatch,
      payload: [...filteredSeries]

    })

  },[])


  return (
    <DataContext.Provider value={{
      ...state,

      //methods
      onLoadData,
      onFilterDataByNameAndCategory

    }}>
      {children}
    </DataContext.Provider>
  )
}
