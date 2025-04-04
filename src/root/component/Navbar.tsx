'use client'
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import {IMAGES} from '../../assets/images'
import { IoMdNotificationsOutline } from "react-icons/io"; 
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/context/AuthContext';


// Import SCSS file
import '../../styles/navbar.scss';
import Searchbar from './SearchBar';
import { getInitials } from '../../lib/GetInit';

const Navbar = () => {
  const { currentUser } = useAuth();
  const location = useLocation(); 
  const pathname = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
 // Hide sidebar on /sign-in and /sign-up routes
if (pathname === '/sign-in' || pathname === '/sign-up') return null;


  
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left" >
        <img src={IMAGES.Logo} alt="Home" className='Logo'/>
      </div>

      <div className="navbar-right">
        <Searchbar />
        <section className='navbar-right-section'>
                  <div>
           <a href='#' className='docs'>Docs</a>
        </div>
        
         <IoMdNotificationsOutline  size={28} color="#545F7D" />

          <section className='avatar-section'>
          {currentUser?.email && (
  <div className="avatar-generated">
    {getInitials(currentUser.email)}
  </div>
)}
<p className='avatar-name'>
  Ayodeji
</p>
            <img src={IMAGES.dropdown} alt="Dropdown" className='dropdown' width={10} height={10}/>
          </section>
          </section>

      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <button className="text-2xl p-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <IoMdMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
