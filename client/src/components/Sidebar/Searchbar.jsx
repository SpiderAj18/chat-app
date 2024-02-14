import React from 'react'

const Searchbar = () => {
  return (
    <div className="join">
  <div>
    <div>
      <input className="input rounded-full input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
 
  <div className="indicator ">
    {/* <span className="indicator-item badge badge-secondary">new</span>  */}
    <button className="btn join-item rounded-full">Search</button>
  </div>
</div>
  )
}

export default Searchbar
