import React from 'react'
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='menu'>
        <h2>FrontEndSystem</h2>

        <div className="menu--list">
            <a href="#" className="item active">
                Dashboard
            </a>
            <a href="#" className="item">
                Assignment
            </a>
            <a href="#" className="item">
                Report
            </a>
            <a href="#" className="item">
                Stats
            </a>
        </div>
    </div>
    
  );
}

export default Sidebar;

