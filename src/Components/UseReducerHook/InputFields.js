/* eslint-disable default-case */
import React from 'react'
import { useReducer } from 'react'

const initialState ={
    name: '',
    email:'',
    password : '',
    phone: '',


}

const reducer = (state ,action)=>{
    switch(action.type ){
        case "name":
          return {...state ,name: action.payload}

           case "email":
           return {...state, email: action.payload}

           case "password":
            return {...state ,password: action.payload}

            case "phone":
                return {...state ,phone: action.payload}

                default: 
                return state


    }
}

function InputFields() {
    const [input,dispatch] = useReducer(reducer , initialState)
  return (
    <div>
        <h1 className='text-4xl mt-4'>useReducer with Input Fields</h1>
        <div>
      <label htmlFor="email" className="block text-sm -ml-72 font-medium leading-6 text-gray-500 mt-4">
     Name
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e)=> dispatch({type:'name', payload: e.target.value})}
          className="block-sm w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  Muhammad Ali"
        />
        <h1>{input.name}</h1>
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm -ml-72 font-medium leading-6 text-gray-500 mt-4">
     E-mail
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e)=> dispatch({type:'email', payload: e.target.value})}
          className="block-sm w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  abc@123gmail.com"
        />
        <h1>{input.email}</h1>
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm -ml-64 font-medium leading-6 text-gray-500 mt-4">
     Password
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e)=> dispatch({type:'password', payload: e.target.value})}
          className="block-sm w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  *******"
        />
        <h1>{input.password}</h1>
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm -ml-72 font-medium leading-6 text-gray-500 mt-4">
     Phone
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e)=> dispatch({type: 'phone', payload: e.target.value})}
          className="block-sm w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  (+92 309876766)"
        />
        <h1>{input.phone}</h1>
      </div>
    </div>



    </div>
  )
}

export default InputFields