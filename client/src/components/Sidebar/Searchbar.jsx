import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder='search' className='input input-bordered rounded-full' />
        <button className='btn btn-circle bg-sky-600 text-white'><SearchOutlinedIcon/></button>
    </form>
  )
}

export default Searchbar
