import React from 'react'
import Searchbar from './Searchbar'

import LogoutBtn from './LogoutBtn'
import Contacts from './Contacts'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <Searchbar/>
      <div className=' divider px-3'></div>
      <Contacts/>
      <LogoutBtn/>
    </div>
  )
}

export default Sidebar
