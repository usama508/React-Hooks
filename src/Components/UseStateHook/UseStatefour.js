import React from 'react'
import { useState } from 'react'

function UseStatefour() {
    const [input, setInput] = useState({ name: '', phone: '', email: '', password: '' });
    console.log(input)

    return (
        <div>
            <h1 className='text-4xl mt-4'>useState with Objects</h1>
            <div>
                <label htmlFor="email" className="block -ml-64 mt-4   text-sm font-medium leading-6 text-gray-500">
                    Name:
                </label>
                <div className="mt-2 ">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={input.name}
                        onChange={(e) => setInput({...input , name: (e.target.value) })}
                        className="block-sm  w-80  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:ml-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        placeholder="  Muhammad Ahmad"
                    /> 
                    <p>{input.name}</p>
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block -ml-64 mt-4   text-sm font-medium leading-6 text-gray-500">
                    Phone:
                </label>
                <div className="mt-2 ">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={input.phone}
                        onChange={(e) => setInput({...input , phone: (e.target.value) })}
                        className="block-sm  w-80  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:ml-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        placeholder="  (+92 3455667679)"
                    /> 
                    <p>{input.phone}</p>
                </div>
            </div>

            <div>
                <label className="block -ml-64 mt-4   text-sm font-medium leading-6 text-gray-500">
                    E-mail:
                </label>
                <div className="mt-2 "> 
               
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={input.email}
                        onChange={(e) => setInput({...input , email: (e.target.value) })}
                        className="block-sm  w-80  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:ml-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        placeholder="  abc123@gmail.com"
                    /> 
                    <p>{input.email}</p>
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block -ml-64 mt-4   text-sm font-medium leading-6 text-gray-500">
                    Password:
                </label>
                <div className="mt-2 ">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={input.password}
                        onChange={(e) => setInput({...input , password: (e.target.value) })}
                        className="block-sm  w-80  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:ml-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        placeholder="  ********"
                    /> 
                    <p>{input.password}</p>
                </div>
            </div>



        </div>
    )
}

export default UseStatefour