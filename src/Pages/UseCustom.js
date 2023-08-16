import React from 'react'
import DocTitleOne from '../Components/UseCustomHook/UseDocumentTitleHook/DocTitleOne'
import DocTitleTwo from '../Components/UseCustomHook/UseDocumentTitleHook/DocTitleTwo'
import CounterOne from '../Components/UseCustomHook/useCounterHook/CounterOne'
import CounterTwo from '../Components/UseCustomHook/useCounterHook/CounterTwo'
import UserForm from '../Components/UseCustomHook/useInputHook/UserForm'

function UseCustom() {
  return (
    <div>
        <DocTitleOne/>
        <DocTitleTwo/>
        <CounterOne/>
        <CounterTwo/>
        <UserForm/>
    </div>
  )
}

export default UseCustom