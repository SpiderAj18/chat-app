import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
            <img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-128.png" alt="User avatar" />
            </div>
           </div>

           <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between text-lg font-semibold'>
                <p className='font-bold text-gray-200'>Lalit Patidar</p>
                <span className='text-xl'>🔥</span>
            </div>
           </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation
