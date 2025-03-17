import Logo from '../assets/logo.png'
import Avatar from '../assets/avatars/avatar-1.png'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false);
    const toggleProfile = () => {
        setIsShowProfile(!isShowProfile);
    };
    return (
        <header className='bg-white shadow-md'>
            <nav className='navbar w-4/5 m-auto flex justify-between items-center'>
                <Link to='/' className='flex gap-4 items-center'>
                    <img src={Logo} alt="Logo" className='w-14' />
                    <span className='text-2xl font-bold'>Todo App</span>
                </Link>
                <div className='flex justify-center items-center *:block *:p-5 *:hover:bg-[#33adff] *:hover:text-white'>
                    <NavLink to="/" className={({ isActive }: { isActive: boolean }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>Home</NavLink>
                    <NavLink to="/admin/dashboard" className={({ isActive }: { isActive: boolean }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>Dashboard</NavLink>
                    <NavLink to="/about" className={({ isActive }: { isActive: boolean }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => `${isActive ? "bg-blue-500 text-white" : ""}`}>Contact</NavLink>
                </div>
                <div className="profile-menu relative" onClick={toggleProfile} aria-hidden="true">
                    <div className="profile-avatar w-12 rounded-full border border-[#33adff] overflow-hidden cursor-pointer">
                        <img src={Avatar} title='Avatar' alt='avatar.png' className='' />
                    </div>
                    <div className={`dropdown-menu rounded-md absolute top-12 right-0 bg-white shadow-md w-[200px] ${isShowProfile ? 'block' : 'hidden'}`}>
                        <div className="dropdown-item border-b border-slate-100">
                            <NavLink to="/profile" className={({ isActive }: { isActive: boolean }) => `block p-4 hover:bg-[#33adff] hover:text-white hover:rounded-t-md ${isActive ? "bg-blue-500 text-white" : ""}`}>Profile</NavLink>
                        </div>
                        <div className="dropdown-item">
                            <button type='button' className='block w-full p-4 text-left hover:bg-[#33adff] hover:text-white hover:rounded-b-md cursor-pointer'>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;