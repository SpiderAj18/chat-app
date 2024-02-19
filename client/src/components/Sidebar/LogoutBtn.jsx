import React from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import useLogout from '../../Hooks/useLogout';

const LogoutBtn = () => {
  const {loading,logout} = useLogout()
  return (
    <button onClick={logout} className='flex w-11 h-10 justify-center mt-auto text-white cursor-pointer bg-transparent'>
        <LogoutOutlinedIcon />
    </button>
  )
}

export default LogoutBtn
