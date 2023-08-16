import React from 'react'
import UseEffects from '../Components/UseEffectHook/UseEffects'
import DataFetching from '../Components/UseEffectHook/DataFetching'
import SingleDataFetching from '../Components/UseEffectHook/SingleDataFetching'
import ButtonClickDataFetching from '../Components/UseEffectHook/ButtonClickDataFetching'

function UseEffect() {
  return (
    <div>
        <UseEffects/>
        <DataFetching/>
        <SingleDataFetching/>
        <ButtonClickDataFetching/>
    </div>
  )
}

export default UseEffect