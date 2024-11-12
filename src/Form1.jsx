import React from 'react'

function Form1() {
  return (<div className='flex justify-center item-center h-screen bg-slate-400'>

    < div className=' h-[70vh] my-[15vh] m-auto  w-[75vw]  ' > {/*Centre the div*/}
     <div className='grid grid-cols-2  w-full h-full '>
       <div className='bg-white flex justify-center text-2xl font-bold text-center border-black border-2' >  
         <form action="" className='shadown-nd mt-5'>
           <label htmlFor="" className='black text-grey-700 text-sm font-bold mb-10  mt-2'>
             Signin
           </label>
           <input type="text" className='shadow appearence-none border rounded w-full py-2 px-3 text-grey-700 leadind tight focus: outline-none focus:shadow-outline mt-2' placeholder='Enter Name'/>
         <div className='mt-5'>
           <label className='black text-grey-700  font-bold text-3xl' htmlFor='password' >
             Password
           </label>
           <input type="password" className='shadow appearence-none border rounded w-full py-2 px-3 text-grey-700 leadind tight focus: outline-none focus:shadow-outline mt-2' placeholder='Enter Password'/>
         </div>
         <div className='flex item-center justify-between'>
           <button className=' bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus shadow-outline mt-5'>Signin</button>
            
         </div>
         </form>
         </div>
       <div className='bg-green-300'> 
         
         <div className='black text-grey-700 text-xs font-bold mb-10  mt-2 flex justify-center item-center place-content-center'>Welcome Back</div>
           </div>
         
    </div>
 </div>
 </div> 
  )
}

export default Form1