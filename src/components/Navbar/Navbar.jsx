import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../Logo/Logo';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = (props) => {
    return (
        <div className='w-full h-auto p-3 flex-custom-1 border-b border-[#0f172a]/10 dark:border-[#cbd5e1]/10'>
            <div className='max-w-[1280px] w-full flex justify-between items-center mx-auto'>
                <a href="/" className=' flex-custom-1 sm:ml-2'>
                    <Logo logoname="A" />
                </a>
                <div className='ml-auto menu-wrapper px-2 flex-custom-1 flex-row flex-md-row-reverse space-x-4 lg:w-full'>
                    <div className='ml-auto icon-wrapper flex-custom-1 flex-row'>
                        <ToggleTheme toggle={props.toggle} setToggle={props.setToggle}></ToggleTheme>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar