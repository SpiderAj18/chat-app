import React from 'react'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
const NoChat = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-full h-full  mt-32'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 🙏🏻 Ajay Gupta</p>
            <p>Select a chat to start messaging</p>
            <div className='w-[150px]'><QuestionAnswerOutlinedIcon /></div>

        </div>
      </div>
    </div>
  )
}

export default NoChat
