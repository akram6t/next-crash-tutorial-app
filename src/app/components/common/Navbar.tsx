// components/Navbar.jsx
'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { IconSearch, IconSun, IconUserCircle, IconMenu2, IconHtml, IconSausage, IconBrandJavascript, IconLanguage } from '@tabler/icons-react';
import ThemeSwitcher from '../ThemeSwitch';
import TutorialsItems from '../TutorialsItems';
import Image from 'next/image';
// import DropdownMenu from '../ui/DropDown';
import { AuthContext } from '@/app/context/AuthProvider';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
    showTutorials?: boolean;
}

const Navbar = ({ showTutorials }: NavbarProps) => {
    const { login, logout, isAuthenticated } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 shadow-lg sticky top-0 w-full z-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-1">

                    <div className="flex items-center">
                        <button type="button" className="lg:hidden me-3 text-white hover:text-gray-200 focus:outline-none" onClick={toggleMobileMenu}>
                            <IconMenu2 size={24} />
                        </button>
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white text-2xl font-bold">
                                <Image
                                    width={30}
                                    height={30}
                                    className="rounded-full overflow-hidden"
                                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo1.webp`} alt='logo' />
                            </Link>
                        </div>
                        <div className="hidden lg:block ml-10">
                            <div className="flex items-baseline space-x-4">

                                {/* <DropdownMenu align='left' showIcon label={'Tutorials'}>
                                    <DropdownMenu.Item label='Learn HTML' icon={<IconHtml/>} />
                                    <DropdownMenu.Item label='Learn CSS' icon={<IconSausage/>} />
                                    <DropdownMenu.Item label='Learn Javascript ' icon={<IconBrandJavascript/>} />
                                </DropdownMenu> */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <span className='text-white font-medium flex items-center space-x-3'>Tutorials
                                            <ChevronDown/>
                                        </span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>



                                {/* <DropdownMenu align='left' showIcon label={'Services'}>
                                    <DropdownMenu.Item label='Tutorials' icon={<IconLanguage/>}/>
                                </DropdownMenu> */}

                                <Link href="/about" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-1 rounded-md text-sm font-medium">Blogs</Link>
                                <Link href="/contact" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-1 rounded-md text-sm font-medium">About Us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <button id="themeToggle" className="text-white hover:text-gray-200 focus:outline-none">
                            <ThemeSwitcher noIconThemeChange />
                        </button>

                        <button className="inline-block lg:hidden text-white mr-3 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                            <IconSearch size={18} />
                        </button>

                        <div className="hidden lg:flex relative mx-4 items-center">
                            <input type="text" placeholder="Search" className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-l-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 w-40" />
                            <button className="text-white bg-white bg-opacity-20 rounded-r-full p-2 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                                <IconSearch size={18} />
                            </button>
                        </div>

                        <div className="flex items-center space-x-2">

                            {
                                !isAuthenticated &&
                                (<>
                                    <button className="text-white border border-white px-3 py-1 rounded-md text-sm font-medium hover:bg-white hover:text-indigo-900">Login</button>
                                    <button className="hidden lg:inline-block bg-white text-indigo-900 px-3 py-1 rounded-md text-sm font-medium hover:bg-opacity-90">Sign Up</button>
                                </>)
                            }

                            {/* {!isAuthenticated &&
                                    <DropdownMenu align='right' showIcon label={<IconUserCircle size={24} />}>
                                        <DropdownMenu.Item label="Account settings"/>
                                        <DropdownMenu.Item label="Support"/>
                                        <DropdownMenu.Item label="License"/>
                                        <DropdownMenu.Item label="Sign out"/>
                                    </DropdownMenu>
                            } */}

                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link href="/about" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                    <Link href="/services" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                    <Link href="/contact" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">

                        {/* user avatar */}
                        <div className="flex-shrink-0">
                            <IconUserCircle size={32} className="text-white" />
                        </div>

                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">User Name</div>
                            <div className="text-sm font-medium leading-none text-gray-400">user@example.com</div>
                        </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                        <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-20">Your Profile</Link>
                        <Link href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-20">Settings</Link>
                        <Link href="/signout" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-20">Sign out</Link>
                    </div>
                </div>
            </div>

            {
                showTutorials && (
                    <>
                        <div className='divider'></div>
                        <TutorialsItems />
                    </>
                )
            }
        </nav>
    );
};

export default Navbar;
