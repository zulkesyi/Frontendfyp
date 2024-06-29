import React from 'react'

const ContentHeader = () => {
  return (<div className='content--header'>
    <h1 className="header--title">Dashboard</h1>
    <div className="header--activity">
        <div className="search-box">
            <input type="text" placeholder="Search Anything Here..." />
        </div>
    </div>
  </div>
  )
};

export default ContentHeader;