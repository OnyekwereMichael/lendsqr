
import { IMAGES } from '../../assets/images';
import { sidebarLinks } from '../../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOutUser } from '../../firebase/auth';
import '../../styles/mobilesidebar.scss'
import { HiOutlineLogout } from 'react-icons/hi';

const MobileSidbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    // Hide sidebar on /sign-in and /sign-up routes
    if (pathname === '/sign-in' || pathname === '/sign-up') return null;

    const handleLogout = async () => {
        try {
            await signOutUser();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    return (
        <div>
            <nav className="sidebar-mobile">
                <div className="sidebar__links">

                    <ul className="sidebar__na">
                        <li className='sidebar__nav-item'>
                            <a href="" className='sidebar__nav-link'>
                                <img src={IMAGES.Home} alt="" className='sidebar__nav-icon' />
                                <p className='sidebar__nav-text'>Dashboard</p>
                            </a>
                        </li>
                    </ul>

                    <h4 className='sidebar_customer'>CUSTOMERS</h4>
                    <ul className="sidebar__nav">
                        {sidebarLinks.slice(0, 8).map((link: any) => {
                            const isActive = pathname === link.route;
                            return (
                                <li className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`} key={link.label}>
                                    <a href={link.route} className="sidebar__nav-link">
                                        <img src={link.imgURL} alt="" className={`sidebar__nav-icon ${isActive ? 'sidebar__nav-icon--active' : ''}`} />
                                        <p className='sidebar__nav-text'>{link.label}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div>
                        <h4 className='sidebar_customer' style={{ marginTop: '0.1rem', marginBottom: '0.2rem' }}>BUSINESSES</h4>
                        <ul className="sidebar__nav">
                            {sidebarLinks.slice(8, 16).map((link: any) => {
                                const isActive = pathname === link.route;
                                return (
                                    <li className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`} key={link.label}>
                                        <a href={link.route} className="sidebar__nav-link">
                                            <img src={link.imgURL} alt="" className={`sidebar__nav-icon ${isActive ? 'sidebar__nav-icon--active' : ''}`} />
                                            <p className='sidebar__nav-text'>{link.label}</p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h4 className='sidebar_customer' style={{ marginTop: '0.4rem', marginBottom: '0.2rem' }}>SETTINGS</h4>

                        <ul className="sidebar__nav">
                            {sidebarLinks.slice(17, 20).map((link: any) => {
                                const isActive = pathname === link.route;
                                return (
                                    <li className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`} key={link.label}>
                                        <a href={link.route} className="sidebar__nav-link">
                                            <img src={link.imgURL} alt="" className={`sidebar__nav-icon ${isActive ? 'sidebar__nav-icon--active' : ''}`} />
                                            <p className='sidebar__nav-text'>{link.label}</p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>


                <button className="sidebar__logout" onClick={() => handleLogout()}>
                     <HiOutlineLogout size={20} />
                    <p className="sidebar__logout-text" >Logout</p>
                </button>

            </nav>
        </div>
    )
}

export default MobileSidbar
