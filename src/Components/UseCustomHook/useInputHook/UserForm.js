import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

  
  
    const handleClick = (e) =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
      
        
    }
  return (
    <div>
        <h1 className='mt-4 text-4xl'>userInput Hook</h1>
         <h1 className='mt-4 text-2xl'>User Form</h1>
         <form >
         <input
          type="email"
          name="email"
          id="email"
          {...bindFirstName}
          className="block-sm w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 mt-4 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  firstname"
        />
        <br />

<input
          type="email"
          name="email"
          id="email"
     {...bindLastName}
          className="mt-4 block-sm w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  lastname"
        />
        <br />
         <button
        type="button"
        onClick={handleClick}
        className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
       Submit
      </button>

         </form>
        </div>
  )
}

export default UserForm

// import React, { useState } from 'react'
// import useInput from './useInput';

// function UserForm() {
//   const [firstName, bindFirstName, resetFirstName] = useInput('')
//   const [lastName, bindLastName, resetLastName] = useInput('')

//   const submitHandler = e => {
//     e.preventDefault()
//     alert(`Hello ${firstName} ${lastName}`)
//     resetFirstName()
//     resetLastName()
//   }
// 	return (
// 		<div>
//       <form onSubmit={submitHandler}>
// 				<div>
// 					<label>First Name</label>
// 					<input
//             type="text"
//             {...bindFirstName}
// 					/>
// 				</div>
// 				<div>
// 					<label>Last Name</label>
// 					<input
//             type="text"
//             {...bindLastName}
// 					/>
//         </div>
//         <button>Submit</button>
// 			</form>
// 		</div>
// 	)
// }

// export default UserForm