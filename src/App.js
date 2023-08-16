
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout'
import UseState from './Pages/UseState';
import UseEffect from './Pages/UseEffect';
import UseContext from './Pages/UseContext';
import Swiper from './Pages/Swiper';
import UseReducer from './Pages/UseReducer';
import UseCallback from './Pages/UseCallback';
import UseMemo from './Pages/UseMemo';
import UseRef from './Pages/UseRef';
import UseCustom from './Pages/UseCustom';
// import { ThemeContext, themes } from './Components/context/themeContext';
// import {useState, useEffect} from 'react'

function App() {
//   const [theme, setTheme] = useState(themes.light)

  
//  const body = document.body
//   const handleClick = () =>{
//     console.log('clicked!')
   

//     theme === themes.light? setTheme(themes.dark) : setTheme(themes.light)
    
//   }

  




  
 

//   useEffect(()=>{

   

   
    
//     switch (theme) {
//       case themes.light:
//         body.classList.remove('bg-dark')
//         body.classList.remove('text-light')
//         body.classList.add('bg-light')
//         body.classList.add('text-dark')
        
//         break;
     
//         case themes.dark:
//           body.classList.remove('bg-light')
//           body.classList.remove('text-dark')
//           body.classList.add('bg-dark')
//           body.classList.add('text-light')
//           break;
//       default:
//         break;
//     }
//   },[theme])
  return (
    // <ThemeContext.Provider value={{theme, handleClick}}>
    <div className="App">
    

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/useState' element={<UseState />} />
            <Route path='/useEffect' element={<UseEffect />} />
            <Route path='/useContext' element={<UseContext />} />
            <Route path='/swiper' element={<Swiper />} />
            <Route path='/useReducer' element={<UseReducer />} />
            <Route path='/useCallback' element={<UseCallback />} />
            <Route path='/useMemo' element={<UseMemo />} />
            <Route path='/useRef' element={<UseRef />} />
            <Route path='/useCustom' element={<UseCustom />} />
          </Route>

        </Routes>

      </div>
);
    {/* </ThemeContext.Provider> */}
  
}

export default App;
