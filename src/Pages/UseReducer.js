import React from 'react'
import Simple from '../Components/UseReducerHook/Simple'
import Complex from '../Components/UseReducerHook/Complex'
import Multiple from '../Components/UseReducerHook/Multiple'
import Reducers from '../Components/UseReducerHook/combine/Reducers'
import FetchingDataOne from '../Components/UseReducerHook/Fetching Data/FetchingDataOne'
import FetchingDataTwo from '../Components/UseReducerHook/Fetching Data/FetchingDataTwo'
import InputFields from '../Components/UseReducerHook/InputFields'


function UseReducer() {
  return (
    <div>
        <Simple/>
        <Complex/>
        <Multiple/>
        <Reducers/>
      <FetchingDataOne/>
        <FetchingDataTwo/>
        <InputFields/>
      
    </div>
  )
}

export default UseReducer