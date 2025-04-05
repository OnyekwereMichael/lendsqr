'use client'
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdNotificationsOutline } from "react-icons/io"; 
import { IMAGES } from '../../assets/images';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/context/AuthContext';
import Searchbar from './SearchBar';
import { getInitials } from '../../lib/GetInit';
import { HiX } from 'react-icons/hi';
import MobileSidbar from './MobileSidbar';
import '../../styles/navbar.scss';

const Navbar = () => {
  const { currentUser } = useAuth();
  const location = useLocation(); 
  const pathname = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hide navbar on auth pages
  if (pathname === '/sign-in' || pathname === '/sign-up') return null;

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <img src={IMAGES.Logo} alt="Home" className='Logo' />
        </div>

        <div className="navbar-right">
          <Searchbar />
          <section className='navbar-right-section'>
            <a href='#' className='docs'>Docs</a>
            <IoMdNotificationsOutline size={28} color="#545F7D" />
            <section className='avatar-section'>
              {currentUser?.email && (
                <div className="avatar-generated">
                  {getInitials(currentUser.email)}
                </div>
              )}
              <p className='avatar-name'>Ayodeji</p>
              <img src={IMAGES.dropdown} alt="Dropdown" className='dropdown' width={10} height={10} />
            </section>
          </section>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <button className="menu-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <HiOutlineMenuAlt3 size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="toggle-nav-wrapper">
          <div className="toggle-nav-overlay" onClick={() => setIsSidebarOpen(false)} />
          <div className="toggle-nav-content">
            <button 
              className="cancel-button" 
              onClick={() => setIsSidebarOpen(false)}
            >
              <HiX size={28} color="#545F7D" />
            </button>
           
            <div className="avatar-section">
              <div className="avatar-generated">
                {getInitials(currentUser?.email || '')}
              </div>
              <p className="avatar-name">Ayodeji</p>
            </div>
             <MobileSidbar />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
