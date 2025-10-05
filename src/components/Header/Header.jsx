import React from 'react';

const Header = () => {
    const links = <>
     <li className='m-2'>Home</li>
      <li className='m-2'>My-Booking</li>
      <li className='m-2'>Blogs</li>
      <li className='m-2'>Contact us</li>

    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown">
     <img src="/src/assets/logo.png" alt="" />
    
    </div>
    <a className="btn btn-ghost text-xl">Law.BD</a>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500 rounded-2xl text-white ">Contact Now</a>
  </div>
</div>
    );
};

export default Header;