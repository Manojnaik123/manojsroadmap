import React from 'react'
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';
import { Sun } from 'lucide-react';

const NavBar = () => {
    return (
        <nav className='fixed w-full border-b border-[#2a2a2a]  h-16 flex justify-center items-center'>
            <div className='max-w-5xl w-full flex justify-between items-center'>
                <div>
                    Manoj Naik
                </div>
                <ul className='flex gap-4'>
                    <li>
                        About
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Projects
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar