import React from 'react'
import Searchbar from './Searchbar'
import Contacts from './Contacts'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className=''>
      <Searchbar/>
      <div className=' divider px-3'></div>
      <Contacts/>
      <LogoutBtn/>
    </div>
  )
}

export default Sidebar
