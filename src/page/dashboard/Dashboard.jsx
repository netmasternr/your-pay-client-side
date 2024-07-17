import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBars } from 'react-icons/ai';

const Dashboard = () => {
    const [isActive, setActive] = useState(false);

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    // Close sidebar when a link is clicked
    const handleCloseSidebar = () => {
        setActive(false);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            {/* Small Screen Navbar */}
            <div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
                
                    <button
                        onClick={handleToggle}
                        className='mobile-menu-button p-1 focus:outline-none '
                    >
                        <AiOutlineBars className='h-6 w-6' />
                    </button>
               
            </div>

            {/* Sidebar */}
            <div
                className={`bg-gray-900 text-white w-64 min-h-screen ${isActive ? 'block' : 'hidden'} md:block`}
            >
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                    
                    <ul className="space-y-2">
                        <li>
                            <Link to='/send-money' onClick={handleCloseSidebar} className="block py-2 px-4 hover:bg-gray-800">Send Money</Link>
                        </li>

                        <li>
                            <Link to='/cash-out' onClick={handleCloseSidebar} className="block py-2 px-4 hover:bg-gray-800">Cash Out</Link>
                        </li>

                        <li>
                            <Link to='/cash-in' onClick={handleCloseSidebar} className="block py-2 px-4 hover:bg-gray-800">Cash In</Link>
                        </li>

                    </ul>

                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1  p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
