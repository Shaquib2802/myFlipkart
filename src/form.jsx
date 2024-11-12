import React from 'react'

export const Form = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-orange-500 py-[10vh]'> 
    <form className='h-[100%] w-[40%] bg-white m-auto rounded-xl' >
        <div className='font-bold text-center text-3xl pt-[5vh]'>Registration Form</div>
        <div className='text-center pt-2 '>Fill out the form carefully for registration.</div>
        <div className='grid grid-cols-2 '>
           <div className='px-5'> 
            <div className='font-sans font-semibold pt-4 '>Student Name</div>
            <input type="text" className='border border-black rounded-md' />
            </div>
            <div className='px-5'>
            <div className='pt-4 font-semibold '>Enrollment No.</div>
            <input type="text" className='border border-black rounded-md' />
        </div>
        <div className='px-5'>
            <div className='pt-10 font-semibold '>Gender</div>
            <input type="text" className='border border-black rounded-md' />
        </div>
        <div className='px-5'>
            <div className='pt-10 font-semibold '>Student Email</div>
            <input type="text" className='border border-black rounded-md' />
        </div>
        <div className='px-5'>
            <div className='pt-10 font-semibold '>Student ID</div>
            <input type="text" className='border border-black rounded-md' />
        </div>
        <div className='px-5'>
            <div className='pt-10 font-semibold '>List of Classes</div>
            <select type="text" className='border border-black rounded-md w-44' >
                <option value="Please Select">Please Select</option>
                <option value="Python ">Python</option>
                <option value="DAA">Design of Algo.& Anaysis</option>
                <option value="Maths">Maths</option>
            </select>
            
        </div>
        
            </div>
            <div className=' mx-auto rounded text-center w-[20%] my-10 h-10 pt-2 bg-green-600 text-white'>Submit</div>
    </form>
    </div>
  )
}
