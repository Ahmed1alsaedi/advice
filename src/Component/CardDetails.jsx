import React from 'react'
function CardDetails(props) {

    return (
       <>
             <div className='card bg-slate-700 text-center w-4/12 m-auto mt-60 h-fit flex flex-col  rounded-2xl relative'>
        <p className='text-green-400 pt-5 text-[15px]'>ADVICE #{props.number}</p>
        <div className='flex justify-center items-center w-3/4 m-auto'>
        <p className='text-stone-200 p-5 font-bold'> {props.advice}</p>
            </div >
            <div className="pb-17 w-3/4 m-auto ">
            <img src="src/assets/pattern-divider-desktop.svg" alt="" className='w-full'/>
            </div>
            <div className='absolute bottom-[-20px] left-0 right-0 '> 
      <div className='bg-green-400 rounded-full w-16 h-16 m-auto'>
        <img src="src/assets/icon-dice.svg" alt="" className=' m-auto pt-5 w-1/3'/>
      </div>
    </div>
      </div>
       </>
    )
}
export default CardDetails;