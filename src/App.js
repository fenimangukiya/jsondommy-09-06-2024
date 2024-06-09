// // import React, { useRef } from 'react'

// // export default function App() {
// //   const imgClick = useRef()
// //   return (
// //     <div>
// //       <input type='file' ref={imgClick} hidden multiple></input>
// //       <img onClick={() => imgClick.current.click()} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2za2CbRWcrc1is3AV5PRsD79YiffMiiP9SA&usqp=CAU'></img>
// //     </div>
// //   )
// // }
// import React from 'react'
// import A from './Component/A'
// import { createContext, useState } from 'react'

// const Name = createContext()

// export default function App() {
//   const [name , setName]= useState('demo')
//   return (
//     <div>
//       <Name.Provider value={name}>
//         <A></A>
//       </Name.Provider>
//     </div>
//   )
// }
// export {Name}



// import React, { useRef, useState } from 'react'

// const App = () => {
//   const fname= useRef()
//   const lname = useRef()
//   const email = useRef()
//   const [firstname ,setfirstname] = useState('feni')
//   const [lastname ,setlastname] = useState('mangukiya')
//   const [mail , setmail] = useState('feni@gmail.com')

//   const inputHandler =() => {
//     setfirstname(fname.current.value)
//     setlastname(lname.current.value)
//     setmail(email.current.value)

//   }
//   return (
//     <div>
//       <input  ref={fname} value={firstname} onChange={inputHandler}></input>
//       <input ref={lname} value={lastname} onChange={inputHandler}></input>
//       <input ref={email} value={mail} onChange={inputHandler}></input>
//       <h2>{firstname}</h2>
//       <h2>{lastname}</h2>
//       <h2>{mail}</h2>
//     </div>
//   )
// }

// export default App

import React, { useRef, useState } from 'react'

export default function App() {
  const fname= useRef()
  const lname = useRef()
  const email = useRef()

  const [inputData , setinputData] = useState({
    fname:'feni',
    lname:'mangukiya',
    email:'feniiiii'
  })

  const inputHandler = () => {
    const input_ ={
      fname:fname.current.value,
      lname:lname.current.value,
      email:email.current.value
    }
    console.log(input_);
    setinputData(input_)
  }
  return (
    <div >
      <form className='mx-auto d-block'>     
         <h1 >Form</h1>
       <input   ref={fname} placeholder='fname' onChange={inputHandler}></input><br></br>
       <input ref={lname} placeholder='lname' onChange={inputHandler}></input><br></br>
       <input  ref={email} placeholder='email' onChange={inputHandler}></input>
       <h2>{inputData.fname}</h2>
       <h2>{inputData.lname}</h2>
       <h2>{inputData.email}</h2>
       </form>

    </div>
  )
}

